/**
 * GitHub Pages は存在しないパスに対して 404.html を返す。
 * SPA の index.html を複製しておくと、/repo/works などでもアプリが起動する。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "out");
const index = path.join(outDir, "index.html");
const fallback = path.join(outDir, "404.html");

if (!fs.existsSync(index)) {
  console.error("gh-pages-spa: out/index.html not found. Run vite build first.");
  process.exit(1);
}
fs.copyFileSync(index, fallback);
console.log("gh-pages-spa: copied index.html -> 404.html");
