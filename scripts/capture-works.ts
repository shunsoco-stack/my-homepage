import { access, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";
import { preview } from "vite";
import { works } from "../src/mocks/works.ts";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "..");
const outputDirectory = resolve(projectRoot, "public", "works");
const outputIndex = resolve(projectRoot, "out", "index.html");

function toPreviewPath(base: string, route: string) {
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${route.replace(/^\/+/, "")}`;
}

const captures = works.map((work) => {
  const routeName = work.url.match(/^\/works\/([a-z0-9-]+)$/i)?.[1];

  if (!routeName) {
    throw new Error(`Unsupported work route: ${work.url}`);
  }

  return { routeName, url: work.url };
});

if (new Set(captures.map(({ routeName }) => routeName)).size !== captures.length) {
  throw new Error("Work routes must be unique before capturing screenshots.");
}

try {
  await access(outputIndex);
} catch {
  throw new Error("Build output was not found. Run `npm run build` before capturing screenshots.");
}

await mkdir(outputDirectory, { recursive: true });

const previewServer = await preview({
  root: projectRoot,
  configFile: resolve(projectRoot, "vite.config.ts"),
  mode: "production",
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});

const previewOrigin = previewServer.resolvedUrls?.local.find((url) => url.includes("127.0.0.1"));

if (!previewOrigin) {
  await previewServer.close();
  throw new Error("Vite preview did not expose a local URL.");
}

const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const { routeName, url } of captures) {
    const pageUrl = new URL(toPreviewPath(previewServer.config.base, url), previewOrigin).toString();
    await page.goto(pageUrl, { waitUntil: "networkidle" });

    const screenshot = await page.screenshot({ type: "png", fullPage: false });
    await sharp(screenshot)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(resolve(outputDirectory, `${routeName}.webp`));

    console.log(`Captured ${url} -> public/works/${routeName}.webp`);
  }
} finally {
  await browser.close();
  await previewServer.close();
}
