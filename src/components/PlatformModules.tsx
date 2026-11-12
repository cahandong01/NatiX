import { For } from "solid-js";
import Reveal from "./Reveal";
import Picture from "./Picture";
import "./PlatformModules.css";

const modules = [
  {
    "name": "WhatsApp",
    "path": "M20 11.6a8 8 0 0 1-11.8 7L3 20l1.4-5.1A8 8 0 1 1 20 11.6Z M8 7l2 3-1 1c1 2 2 3 4 4l1-1 3 2c-1 3-3 2-5 1-3-1-6-4-6-7 0-1 1-3 2-3Z"
  },
  {
    "name": "PPDB",
    "path": "M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21v-3a6 6 0 0 1 12 0v3M3 7h4M5 5v4M3 14v5M21 14v5"
  },
  {
    "name": "Akademik",
    "path": "m2 8 10-5 10 5-10 5L2 8ZM6 10v6c4 3 8 3 12 0v-6M22 8v9"
  },
  {
    "name": "Pesantren",
    "path": "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6M3 10V5M21 10V5M2 5h2M20 5h2M12 5V2"
  },
  {
    "name": "Ketertiban",
    "path": "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6"
  },
  {
    "name": "Keuangan",
    "path": "M17 5c0 4-14 4-14 0s14-4 14 0ZM3 5v5c0 4 14 4 14 0V5M3 10v5c0 3 6 4 10 3M3 15v4c0 3 6 4 10 3M22 18a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
  },
  {
    "name": "SDM",
    "path": "M15 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM6 21v-3a6 6 0 0 1 12 0v3M5 5a3 3 0 0 0 0 6M19 5a3 3 0 0 1 0 6M2 20v-3a4 4 0 0 1 3-4M22 20v-3a4 4 0 0 0-3-4"
  },
  {
    "name": "Inventaris dan Aset",
    "path": "m12 2 6 3-6 3-6-3 6-3ZM6 5v6l6 3 6-3V5M12 8v6M6 11l-5 3 6 3 5-3M1 14v6l6 3 5-3M7 17v6M18 11l5 3-6 3-5-3M23 14v6l-6 3-5-3M17 17v6"
  },
  {
    "name": "Asrama",
    "path": "M3 21V5M21 21v-9H3M3 18h18M7 12V8h5v4M13 12V8h6a2 2 0 0 1 2 2v2"
  },
  {
    "name": "Dapur dan Makan",
    "path": "M5 3v6M8 3v6M2 3v6c0 4 6 4 6 0M5 12v10M17 13v9M17 3c-5 0-5 10 0 10s5-10 0-10Z"
  },
  {
    "name": "Perpustakaan",
    "path": "M5 3h15v18H5a3 3 0 0 1 0-6h15M5 3a3 3 0 0 0-3 3v12M10 3v8l3-2 3 2V3M5 18h15"
  },
  {
    "name": "Transportasi",
    "path": "M8 3h8a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM4 12h16M8 3v9M16 3v9M7 20v2M17 20v2M8 16h1M15 16h1M1 8v5M23 8v5"
  },
  {
    "name": "Koperasi",
    "path": "M3 10v11h18V10M2 10l2-7h16l2 7c-2 3-4 3-6 0-2 3-6 3-8 0-2 3-4 3-6 0ZM9 21v-7h6v7M8 3l-1 7M16 3l1 7"
  },
  {
    "name": "Payment Gateway",
    "path": "M5 5h11a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3ZM2 10h17M6 16h3M22 7c2 3 2 6 0 9M21 10c1 1 1 3 0 4"
  }
];

export default function PlatformModules() {
  return (
    <section class="nx-platform-modules" aria-labelledby="platform-modules-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-platform-modules__heading">
            <p class="nx-platform-modules__eyebrow">EKOSISTEM NATIX</p>
            <h2 id="platform-modules-title">14 modul terintegrasi untuk <span>pengelolaan lembaga yang utuh</span></h2>
            <p class="nx-platform-modules__lead">Dari penerimaan siswa hingga kegiatan harian, seluruh bagian bekerja dengan data yang saling terhubung dalam satu platform.</p>
          </div>
        </Reveal>
        <div class="nx-platform-modules__body">
          <Reveal delay={120} class="nx-platform-modules__catalogue">
            <ul class="nx-platform-modules__list" role="list" aria-label="14 modul NatiX">
              <For each={modules}>{(module) => (
                <li class="nx-platform-modules__card">
                  <svg class="nx-platform-modules__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={module.path} /></svg>
                  <span class="nx-platform-modules__name">{module.name}</span>
                </li>
              )}</For>
            </ul>
          </Reveal>
          <Reveal delay={180} class="nx-platform-modules__visual">
            <Picture name="platform-modules-building-v1" alt="Ilustrasi gedung pendidikan NatiX dengan fasad putih dan biru." width={1438} height={779} widths={[480, 800]} sizes="(max-width: 991px) calc(100vw - 40px), 445px" class="nx-platform-modules__image" />
          </Reveal>
        </div>
        <Reveal>
          <div class="nx-platform-modules__connection">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 13 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0M16 8l1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" /></svg>
            <p><strong>Satu ekosistem, saling terhubung.</strong> <span>Data, proses, dan layanan terintegrasi di seluruh modul.</span></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
