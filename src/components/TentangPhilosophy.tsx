import { For, type JSX } from "solid-js";
import Reveal from "./Reveal";
import "./TentangPhilosophy.css";

const principles: { title: string; description: string; icon: JSX.Element }[] = [
  {
    title: "Teknologi yang Relevan",
    description: "Sistem yang menghubungkan pekerjaan harian sesuai karakter sekolah, pesantren, dan yayasan di Indonesia.",
    icon: <><rect x="3" y="3" width="18" height="13" rx="2" /><path d="M2 20h20M8 16l-1 4M16 16l1 4" /></>,
  },
  {
    title: "Tata Kelola yang Lebih Baik",
    description: "Catatan akademik, operasional, keuangan, dan SDM menjadi dasar evaluasi serta keputusan lembaga.",
    icon: <><path d="m12 3 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  },
  {
    title: "Pendampingan Berkelanjutan",
    description: "Pelatihan, penguatan manajemen, dan konsultasi mengikuti kebutuhan serta tahap perkembangan lembaga.",
    icon: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" /></>,
  },
];

export default function TentangPhilosophy() {
  return (
    <section class="nx-tentang-philosophy" aria-labelledby="tentang-philosophy-title">
      <div class="nx-container nx-tentang-philosophy__grid">
        <Reveal>
          <p class="nx-tentang-eyebrow">Filosofi Kami</p>
          <h2 id="tentang-philosophy-title">Teknologi, Manajemen, dan Pendampingan dalam <span>Satu Ekosistem.</span></h2>
          <p class="nx-tentang-philosophy__lead">Dibangun dari Sleman, Yogyakarta, NatiX menghubungkan sistem dan pendampingan agar pengelolaan lembaga lebih tertata, terhubung, dan terkendali.</p>
        </Reveal>
        <Reveal delay={120} class="nx-tentang-philosophy__principles">
          <ul role="list">
            <For each={principles}>{(principle) => (
              <li>
                <span class="nx-tentang-philosophy__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{principle.icon}</svg>
                </span>
                <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
              </li>
            )}</For>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
