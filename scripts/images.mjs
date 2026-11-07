// Konversi gambar ke AVIF + WebP berlebar jamak.
// Pakai: npm run images -- hero_bg.png  (nama berkas di public/assets)
// Keluaran: public/assets/opt/<nama>-<lebar>.{avif,webp}; lebar dan tinggi asli dicetak untuk komponen Picture.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { basename, extname, join, resolve } from "node:path";

const WIDTHS = [480, 960, 1600];
const assets = resolve(import.meta.dirname, "..", "public", "assets");
const out = join(assets, "opt");
const files = process.argv.slice(2);
if (!files.length) {
  console.error("Sebutkan berkas di public/assets, contoh: npm run images -- hero_bg.png");
  process.exit(1);
}

await mkdir(out, { recursive: true });
for (const file of files) {
  const name = basename(file, extname(file));
  const img = sharp(join(assets, file));
  const { width, height } = await img.metadata();
  for (const w of WIDTHS.filter((x) => x <= width)) {
    const resized = () => sharp(join(assets, file)).resize({ width: w });
    await resized().avif({ quality: 55 }).toFile(join(out, `${name}-${w}.avif`));
    await resized().webp({ quality: 78 }).toFile(join(out, `${name}-${w}.webp`));
  }
  console.log(`${name}: asli ${width}x${height}, lebar dibuat: ${WIDTHS.filter((x) => x <= width).join(", ")}`);
}
