import { For } from "solid-js";
import Link from "./Link";
import Reveal from "./Reveal";
import "./SolutionsComparison.css";

const contexts = [
  {
    title: "Sekolah dan Madrasah",
    description: "Hubungkan kegiatan akademik dan administrasi agar informasi siswa tidak terpisah antarbagian.",
    scope: ["Penerimaan dan data siswa", "Kehadiran, nilai, dan rapor", "Tagihan dan pembayaran"],
    link: "Lihat Solusi Sekolah",
    icon: <><path d="m3 7 9-4 9 4-9 4-9-4zM6 9v7c3 3 9 3 12 0V9M21 7v7" /></>,
  },
  {
    title: "Pesantren dan Boarding",
    description: "Selaraskan pendidikan, pembinaan santri, dan kehidupan asrama dengan kebiasaan kerja lembaga.",
    scope: ["Halaqah kitab dan tahfidz", "Pembinaan dan perizinan", "Asrama dan kebutuhan harian"],
    link: "Lihat Solusi Pesantren",
    icon: <><path d="M12 5v16M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2M12 5c3-2 7-2 10-1v15c-3-1-7-1-10 2" /></>,
  },
  {
    title: "Yayasan Multi-Lembaga",
    description: "Satukan pandangan atas seluruh lembaga dengan pembagian kewenangan yang jelas.",
    scope: ["Konsolidasi informasi lembaga", "Hak akses sesuai peran", "Evaluasi dan keputusan pimpinan"],
    link: "Lihat Solusi Yayasan",
    icon: <><path d="M12 7v5M5 16v-4h14v4" /><rect x="8" y="2" width="8" height="5" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /></>,
  },
];

export default function SolutionsComparison() {
  return (
    <section class="nx-solutions-preview" aria-labelledby="nx-solutions-preview-title">
      <div class="container">
        <Reveal>
          <header class="nx-solutions-preview__heading">
            <p class="nx-solutions-preview__eyebrow">Solusi Pengelolaan Lembaga Pendidikan</p>
            <h2 id="nx-solutions-preview-title">Solusi Terpadu untuk <span>Seluruh Lembaga</span></h2>
            <p class="nx-solutions-preview__intro">Satu platform yang fleksibel untuk berbagai jenis lembaga pendidikan dalam satu yayasan.</p>
          </header>
          <ul class="nx-solutions-preview__columns" role="list">
            <For each={contexts}>{(context) => (
              <li>
                <article class="nx-solutions-preview__context">
                  <div class="nx-solutions-preview__title">
                    <span class="nx-solutions-preview__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{context.icon}</svg>
                    </span>
                    <h3>{context.title}</h3>
                  </div>
                  <p class="nx-solutions-preview__description">{context.description}</p>
                  <ul class="nx-solutions-preview__scope" role="list">
                    <For each={context.scope}>{(item) => (
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
                        <span>{item}</span>
                      </li>
                    )}</For>
                  </ul>
                  <Link href="/solusi" class="nx-solutions-preview__link">
                    {context.link}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
                  </Link>
                </article>
              </li>
            )}</For>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
