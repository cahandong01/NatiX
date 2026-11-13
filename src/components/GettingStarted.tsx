import { For } from "solid-js";
import Reveal from "./Reveal";
import "./GettingStarted.css";

const steps = [
  {
    title: "Konsultasi dan Demo",
    description: "Petakan kebutuhan yayasan dan lembaga, lalu lihat alur NatiX yang relevan dengan pekerjaan sehari-hari.",
    icon: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 9h10M7 12h6" /></>,
  },
  {
    title: "Program Pilot",
    description: "Tentukan ruang lingkup awal pada unit terpilih. Evaluasi hasilnya sebelum memperluas penerapan.",
    icon: <><path d="m12 3 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  },
  {
    title: "Pendampingan dan Pengembangan",
    description: "Siapkan data, latih tim, dan dampingi penggunaan. Tinjau penerapan untuk memperbaiki tata kelola secara bertahap.",
    icon: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" /></>,
  },
];

export default function GettingStarted() {
  return (
    <section class="nx-start" aria-labelledby="nx-start-title">
      <div class="container">
        <Reveal>
          <div class="nx-start__heading">
            <p class="nx-start__eyebrow">TAHAP PENERAPAN</p>
            <h2 id="nx-start-title">Langkah Mudah Memulai <span>dengan NatiX</span></h2>
            <p>Dari memahami kebutuhan hingga mendampingi penerapan, setiap tahap disesuaikan dengan kesiapan lembaga Anda.</p>
          </div>
        </Reveal>
        <div class="nx-start__panel">
          <svg class="nx-start__segments" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="nx-start-middle-fill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                <stop stop-color="var(--nx-bg)" stop-opacity="0.15" />
                <stop offset="1" stop-color="var(--nx-blue-accent)" stop-opacity="0.09" />
              </linearGradient>
            </defs>
            <path d="M370 0H770L814 180L770 360H370L414 180Z" fill="url(#nx-start-middle-fill)" />
            <path d="M370 0L414 180L370 360M770 0L814 180L770 360" fill="none" stroke="var(--nx-blue-accent)" stroke-opacity="0.28" stroke-width="1" vector-effect="non-scaling-stroke" />
          </svg>
          <ol class="nx-start__steps" role="list">
          <For each={steps}>{(step, index) => (
            <li>
              <Reveal delay={index() * 150}>
                <article class="nx-start__card">
                  <div class="nx-start__markers" aria-hidden="true">
                    <span class="nx-start__number">{index() + 1}</span>
                    <span class="nx-start__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{step.icon}</svg>
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            </li>
          )}</For>
          </ol>
        </div>
      </div>
    </section>
  );
}
