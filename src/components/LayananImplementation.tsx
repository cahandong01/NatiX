import { For, type JSX } from "solid-js";
import Reveal from "./Reveal";
import "./LayananImplementation.css";

const steps: { title: string; description: string; icon: JSX.Element }[] = [
  {
    title: "Demo & Konsultasi",
    description: "Memahami kebutuhan dan merancang solusi yang sesuai.",
    icon: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 9h10M7 12h6" /></>,
  },
  {
    title: "Program Pilot",
    description: "Uji coba terarah di lembaga Anda.",
    icon: <><path d="m12 3 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  },
  {
    title: "Migrasi Data",
    description: "Perpindahan data aman dan terstruktur.",
    icon: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  },
  {
    title: "Pelatihan",
    description: "Meningkatkan kompetensi pengguna.",
    icon: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" /></>,
  },
  {
    title: "Pendampingan",
    description: "Dukungan berkelanjutan untuk kesiapan jangka panjang.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  },
];

export default function LayananImplementation() {
  return (
    <section class="nx-layanan-implementation" aria-labelledby="layanan-implementation-title">
      <div class="nx-container nx-layanan-implementation__container">
        <Reveal>
          <header class="nx-layanan-implementation__heading">
            <p class="nx-layanan-implementation__eyebrow">Perjalanan Implementasi</p>
            <h2 id="layanan-implementation-title">Pendekatan terstruktur untuk <span>hasil maksimal</span></h2>
            <p>Dari perencanaan hingga pendampingan berkelanjutan, setiap langkah disesuaikan dengan kesiapan lembaga Anda.</p>
          </header>
        </Reveal>
        <ol class="nx-layanan-implementation__steps" role="list">
          <For each={steps}>{(step, index) => (
            <li>
              <Reveal delay={index() * 90}>
                <div class="nx-layanan-implementation__step">
                  <span class="nx-layanan-implementation__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{step.icon}</svg>
                  </span>
                  <span class="nx-layanan-implementation__number" aria-hidden="true">{String(index() + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            </li>
          )}</For>
        </ol>
      </div>
    </section>
  );
}
