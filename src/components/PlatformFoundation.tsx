import { For } from "solid-js";
import Reveal from "./Reveal";
import "./PlatformFoundation.css";

const foundations = [
  { title: "Data yayasan terpisah", description: "Data setiap yayasan dikelola dalam ruangnya masing-masing.", path: "m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" },
  { title: "Banyak lembaga, satu pengelolaan", description: "Sekolah, pesantren, dan unit pendukung terhubung di bawah yayasan.", path: "M12 7v5M5 16v-4h14v4M8 2h8v5H8ZM2 16h6v6H2ZM16 16h6v6h-6Z" },
  { title: "Hak akses sesuai kewenangan", description: "Akses data dan tindakan diatur menurut peran serta lingkup lembaga.", path: "m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7l8-4Zm-4 9 3 3 5-6" },
  { title: "Riwayat aktivitas tercatat", description: "Jejak aktivitas mendukung penelusuran dan pengawasan pengelolaan data.", path: "M5 3h10l4 4v14H5V3ZM15 3v5h4M9 12h6M9 16h6" },
];

export default function PlatformFoundation() {
  return (
    <section class="nx-platform-foundation" aria-labelledby="platform-foundation-title">
      <div class="nx-container nx-platform-foundation__grid">
        <Reveal class="nx-platform-foundation__content">
          <p class="nx-platform-foundation__eyebrow">FONDASI TEPERCAYA</p>
          <h2 id="platform-foundation-title">Pengelolaan terhubung, <span>kendali tetap terjaga</span></h2>
          <p class="nx-platform-foundation__lead">Kelola banyak lembaga dengan batas data dan kewenangan yang jelas. Aktivitas tercatat agar pengelolaan dapat ditelusuri.</p>
        </Reveal>
        <Reveal delay={90} class="nx-platform-foundation__panel nx-platform-foundation__visual">
          <svg class="nx-platform-foundation__diagram" viewBox="0 0 340 276" role="img" aria-labelledby="platform-foundation-diagram-title">
            <title id="platform-foundation-diagram-title">Lembaga dan pengguna terhubung melalui satu platform dengan data dan kewenangan yang terkelola.</title>
            <defs>
              <linearGradient id="platform-foundation-core" x1="34" y1="108" x2="306" y2="178" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--nx-blue-accent)" />
                <stop offset="1" stop-color="var(--nx-blue-strong)" />
              </linearGradient>
              <filter id="platform-foundation-depth" x="-10%" y="-20%" width="120%" height="150%" color-interpolation-filters="sRGB">
                <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="var(--nx-navy)" flood-opacity=".12" />
              </filter>
            </defs>
            <g fill="none" stroke="var(--nx-blue)" stroke-width="1.5" opacity=".55"><path d="M170 86v22M170 178v22M38 140H18v94h12M302 140h20v94h-12" /></g>
            <rect x="70" y="18" width="200" height="68" rx="14" fill="var(--nx-bg)" stroke="var(--nx-line)" filter="url(#platform-foundation-depth)" />
            <rect x="34" y="108" width="272" height="70" rx="14" fill="url(#platform-foundation-core)" filter="url(#platform-foundation-depth)" />
            <rect x="10" y="200" width="320" height="60" rx="14" fill="var(--nx-tint)" stroke="var(--nx-line)" filter="url(#platform-foundation-depth)" />
            <g text-anchor="middle" font-family="var(--nx-font-body)">
              <text x="170" y="48" fill="var(--nx-navy)" font-size="15" font-weight="600">Lembaga &amp; pengguna</text>
              <text x="170" y="68" fill="var(--nx-ink-soft)" font-size="12">Terhubung sesuai peran</text>
              <text x="170" y="139" fill="white" font-size="19" font-weight="600">Platform NatiX</text>
              <text x="170" y="161" fill="white" font-size="12">Satu ekosistem pengelolaan</text>
              <text x="170" y="225" fill="var(--nx-navy)" font-size="14" font-weight="600">Data &amp; kewenangan</text>
              <text x="170" y="245" fill="var(--nx-ink-soft)" font-size="12">Terpisah, terkendali, dan tercatat</text>
            </g>
          </svg>
        </Reveal>
        <Reveal delay={180} class="nx-platform-foundation__panel">
          <ul class="nx-platform-foundation__points" role="list">
            <For each={foundations}>{(item) => (
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={item.path} /></svg>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>
            )}</For>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

