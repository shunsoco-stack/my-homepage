import { access } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { chromium, type Browser, type Page } from "playwright";
import { build, preview } from "vite";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "..");
const configFile = resolve(projectRoot, "vite.config.ts");
const screenshotPath = resolve(tmpdir(), "ai-procurement-portfolio-qa.png");
const projectTitle = "AI調達・仕入先選定エージェント";
const expectedGalleryAlts = [
  `${projectTitle}の調達条件入力と評価Weight設定画面`,
  `${projectTitle}の8段階の調達計画とActivity Log画面`,
  `${projectTitle}のEvidence付きSupplier候補一覧画面`,
  `${projectTitle}のSupplier比較表、不足情報Task、再調査結果画面`,
  `${projectTitle}の重み付き評価、Risk、交渉案、Human Review画面`,
];

async function launchBrowser(): Promise<Browser> {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    return chromium.launch({ channel: "chrome", headless: true });
  }
}

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    if (text.includes("Failed to load resource")) return;
    errors.push(`console: ${text}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  page.on("response", (response) => {
    if (response.url().includes("ai-procurement-supplier-agent") && response.status() >= 400) {
      errors.push(`asset ${response.status()}: ${response.url()}`);
    }
  });
  return errors;
}

async function assertNoPageFailure(page: Page, errors: string[], label: string) {
  const state = await page.evaluate(() => ({
    bodyText: document.body.innerText.trim().length,
    overlay: Boolean(
      document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay"),
    ),
    viewportWidth: document.documentElement.clientWidth,
    pageWidth: document.documentElement.scrollWidth,
  }));
  if (state.bodyText === 0) throw new Error(`${label}: blank page`);
  if (state.overlay) throw new Error(`${label}: framework error overlay`);
  if (state.pageWidth > state.viewportWidth + 1) {
    throw new Error(`${label}: horizontal overflow ${state.pageWidth} > ${state.viewportWidth}`);
  }
  if (errors.length > 0) throw new Error(`${label}: ${errors.join(" | ")}`);
}

const productionUrl = process.env.PORTFOLIO_URL?.trim();
let previewServer: Awaited<ReturnType<typeof preview>> | undefined;
let baseUrl: string;

if (productionUrl) {
  baseUrl = new URL(productionUrl.endsWith("/") ? productionUrl : `${productionUrl}/`).toString();
} else {
  process.env.BASE_PATH = "/my-homepage/";
  await build({ root: projectRoot, configFile });
  await access(resolve(projectRoot, "out", "index.html"));

  previewServer = await preview({
    root: projectRoot,
    configFile,
    preview: { host: "127.0.0.1", port: 4174, strictPort: true },
  });
  const previewOrigin = previewServer.resolvedUrls?.local.find((url) => url.includes("127.0.0.1"));
  if (!previewOrigin) throw new Error("Vite preview URL was not available.");
  baseUrl = new URL(previewServer.config.base, previewOrigin).toString();
}

const browser = await launchBrowser();
try {
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    locale: "ja-JP",
    reducedMotion: "reduce",
  });
  const desktopPage = await desktopContext.newPage();
  const desktopErrors = collectErrors(desktopPage);
  await desktopPage.goto(baseUrl, { waitUntil: "domcontentloaded" });

  const card = desktopPage.getByRole("button", { name: `${projectTitle}の詳細を見る` }).first();
  await card.scrollIntoViewIfNeeded();
  await card.focus();
  await desktopPage.keyboard.press("Enter");

  const dialog = desktopPage.getByRole("dialog", { name: projectTitle });
  await dialog.waitFor({ state: "visible" });
  const closeButton = desktopPage.getByRole("button", { name: `${projectTitle}の詳細を閉じる` });
  if (!(await closeButton.evaluate((element) => document.activeElement === element))) {
    throw new Error("Desktop: close button did not receive initial focus.");
  }

  for (let index = 0; index < expectedGalleryAlts.length; index += 1) {
    await desktopPage.getByRole("button", { name: new RegExp("^.*を表示$") }).nth(index).click();
    const image = dialog.getByRole("img", { name: expectedGalleryAlts[index] });
    await image.waitFor({ state: "visible" });
    const dimensions = await image.evaluate(async (element) => {
      const imageElement = element as HTMLImageElement;
      if (!imageElement.complete) {
        await new Promise<void>((resolveImage, rejectImage) => {
          imageElement.addEventListener("load", () => resolveImage(), { once: true });
          imageElement.addEventListener("error", () => rejectImage(new Error("Gallery image failed to load.")), {
            once: true,
          });
        });
      }
      await imageElement.decode();
      return { complete: imageElement.complete, width: imageElement.naturalWidth, height: imageElement.naturalHeight };
    });
    if (!dimensions.complete || dimensions.width < 1000 || dimensions.height < 700) {
      throw new Error(`Desktop: gallery image ${index + 1} did not load at full quality.`);
    }
  }

  const liveDemo = desktopPage.getByRole("link", { name: `${projectTitle}：Live Demoを新しいタブで開く` });
  const github = desktopPage.getByRole("link", { name: `${projectTitle}のGitHubを新しいタブで開く` });
  if ((await liveDemo.getAttribute("href")) !== "https://ai-procurement-supplier-agent.vercel.app") {
    throw new Error("Desktop: Live Demo URL mismatch.");
  }
  if ((await github.getAttribute("href")) !== "https://github.com/shunsoco-stack/ai-procurement-supplier-agent") {
    throw new Error("Desktop: GitHub URL mismatch.");
  }
  await desktopPage.getByText("Verified snapshot", { exact: true }).waitFor({ state: "visible" });
  await desktopPage.screenshot({ path: screenshotPath, fullPage: false });

  await desktopPage.keyboard.press("Escape");
  await dialog.waitFor({ state: "hidden" });
  if (!(await card.evaluate((element) => document.activeElement === element))) {
    throw new Error("Desktop: focus did not return to the selected work card.");
  }

  const externalCard = desktopPage.getByRole("button", { name: "BaoBao 公式アプリの詳細を見る" });
  await externalCard.scrollIntoViewIfNeeded();
  await externalCard.click();
  const externalDialog = desktopPage.getByRole("dialog", { name: "BaoBao 公式アプリ" });
  const externalCta = externalDialog.getByRole("link", {
    name: "BaoBao 公式アプリ：サイトを見るを新しいタブで開く",
  });
  if ((await externalCta.getAttribute("href")) !== "https://apps.apple.com/app/id6762620176") {
    throw new Error("Desktop: existing external project CTA URL mismatch.");
  }
  const externalCtaWidthRatio = await externalCta.evaluate((element) => {
    const parent = element.parentElement;
    if (!parent) return 0;
    return element.getBoundingClientRect().width / parent.getBoundingClientRect().width;
  });
  if (externalCtaWidthRatio < 0.9) {
    throw new Error("Desktop: single existing-project CTA did not retain full width.");
  }
  await desktopPage.keyboard.press("Escape");
  await externalDialog.waitFor({ state: "hidden" });

  await desktopPage.getByRole("button", { name: "AIエージェント", exact: true }).click();
  await desktopPage.getByRole("button", { name: `${projectTitle}の詳細を見る` }).waitFor({ state: "visible" });

  const worksUrl = new URL("works", baseUrl).toString();
  await desktopPage.goto(worksUrl, { waitUntil: "domcontentloaded" });
  const internalCard = desktopPage.getByRole("button", {
    name: "飲食店チェーン 公式サイトリニューアルの詳細を見る",
  });
  await internalCard.scrollIntoViewIfNeeded();
  await internalCard.click();
  const internalDialog = desktopPage.getByRole("dialog", {
    name: "飲食店チェーン 公式サイトリニューアル",
  });
  const internalCta = internalDialog.getByRole("link", { name: "サイトを見る", exact: true });
  const internalHref = await internalCta.getAttribute("href");
  if (!internalHref?.endsWith("/my-homepage/works/restaurant")) {
    throw new Error(`Desktop: existing internal project base-path mismatch (${internalHref}).`);
  }
  await internalCta.click();
  await desktopPage.waitForURL(/\/my-homepage\/works\/restaurant$/);
  await desktopPage.getByRole("heading", { name: /UMAMI/ }).waitFor({ state: "visible" });

  await desktopPage.goBack({ waitUntil: "domcontentloaded" });
  await desktopPage.getByRole("button", { name: "AIエージェント", exact: true }).click();
  await desktopPage.getByRole("button", { name: `${projectTitle}の詳細を見る` }).click();
  const worksDialog = desktopPage.getByRole("dialog", { name: projectTitle });
  await worksDialog.waitFor({ state: "visible" });
  if ((await worksDialog.getByRole("button", { name: /を表示$/ }).count()) !== 5) {
    throw new Error("Desktop works page: gallery did not expose all five screenshots.");
  }
  await desktopPage.keyboard.press("Escape");
  await assertNoPageFailure(desktopPage, desktopErrors, "Desktop home");
  await desktopContext.close();

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    locale: "ja-JP",
    reducedMotion: "reduce",
  });
  const mobilePage = await mobileContext.newPage();
  const mobileErrors = collectErrors(mobilePage);
  await mobilePage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  const mobileCard = mobilePage.getByRole("button", { name: `${projectTitle}の詳細を見る` }).first();
  await mobileCard.scrollIntoViewIfNeeded();
  await mobileCard.click();
  const mobileDialog = mobilePage.getByRole("dialog", { name: projectTitle });
  await mobileDialog.waitFor({ state: "visible" });
  const targetHeights = await mobileDialog.locator("button").evaluateAll((buttons) =>
    buttons.map((button) => button.getBoundingClientRect().height),
  );
  if (targetHeights.some((height) => height < 44)) {
    throw new Error(`Mobile: touch target below 44px (${Math.min(...targetHeights)}px).`);
  }
  await assertNoPageFailure(mobilePage, mobileErrors, "Mobile dialog");
  await mobileContext.close();

  console.log("PASS Desktop home + /works · procurement 5/5 gallery · existing internal/external CTAs");
  console.log("PASS Mobile 390x844 · no overflow · 44px dialog targets");
  console.log(`Screenshot: ${screenshotPath}`);
} finally {
  await browser.close();
  await previewServer?.close();
}
