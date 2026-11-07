// Prerender: menulis HTML statis penuh untuk setiap rute dari hasil build SSR.
// Dijalankan setelah `vite build` (klien) dan `vite build --ssr` (server).
import { generateHydrationScript } from "solid-js/web";
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const ssr = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);
const template = await readFile(join(dist, "index.html"), "utf8");
const SITE_URL = "https://natix.id";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const tagHtml = ({ tag, key, attrs }) =>
  `<${tag} data-seo="${esc(key)}" ${Object.entries(attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(" ")}>`;

// Preload font latin yang dipakai di layar pertama.
const assets = await readdir(join(dist, "assets"));
const fontPreloads = assets
  .filter((f) => /^(fraunces|inter)-latin-wght-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`);

function build(page) {
  const head = [
    `<title>${esc(page.title)}</title>`,
    ...ssr.headTags(page).map(tagHtml),
    ...fontPreloads,
    `<script type="application/ld+json">${JSON.stringify(ssr.jsonLd(page)).replace(/</g, "\\u003c")}</script>`,
    generateHydrationScript(),
  ].join("\n    ");
  return template.replace("<!--nx-head-->", head).replace("<!--nx-body-->", ssr.render(page.path));
}

async function write(file, html) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

for (const page of ssr.PAGES) {
  const file = page.path === "/" ? join(dist, "index.html") : join(dist, page.path, "index.html");
  await write(file, build(page));
}
// Halaman 404 (rute "/404" jatuh ke penangkap semua rute, jadi yang dirender adalah NotFound).
await write(join(dist, "404.html"), build(ssr.NOT_FOUND));

const today = new Date().toISOString().slice(0, 10);
const urls = ssr.PAGES.map(
  (p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
).join("\n");
await write(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await write(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`Prerender selesai: ${ssr.PAGES.length} rute + 404.html + sitemap.xml + robots.txt`);
