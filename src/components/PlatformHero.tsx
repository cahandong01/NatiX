import { For, type JSX } from "solid-js";
import Button from "./Button";
import Reveal from "./Reveal";
import { DEMO_LINK } from "../site";
import "./PlatformHero.css";

const steps: { title: string; description: string; icon: JSX.Element }[] = [
  {
    title: "Operasional",
    description: "Kegiatan harian tercatat di setiap bagian.",
    icon: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  },
  {
    title: "Data",
    description: "Satu sumber informasi lintas bagian.",
    icon: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  },
  {
    title: "Insight",
    description: "Tren dan evaluasi kondisi lembaga.",
    icon: <><path d="M4 21h16" /><rect x="5" y="12" width="3" height="6" rx="1" /><rect x="11" y="8" width="3" height="10" rx="1" /><rect x="17" y="3" width="3" height="15" rx="1" /></>,
  },
  {
    title: "Keputusan",
    description: "Prioritas pimpinan berdasarkan data.",
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="m12 12 9-9M16 3h5v5" /></>,
  },
  {
    title: "Tindakan",
    description: "Tindak lanjut sesuai peran dan kewenangan.",
    icon: <><path d="M14 5c3-3 7-3 7-3s0 4-3 7l-6 6-5-5 7-5ZM7 10H3l-1 5 5-1M12 15v4l-5 3 1-7M5 17l-3 4" /><circle cx="16" cy="7" r="1" /></>,
  },
];

export default function PlatformHero() {
  return (
    <section class="hero-section nx-platform-hero" aria-labelledby="platform-title">
      <div class="nx-platform-hero__container">
        <div class="nx-platform-hero__grid">
          <Reveal class="nx-platform-hero__content">
            <p class="hero-eyebrow">PLATFORM NATIX</p>
            <h1 id="platform-title" class="hero-title">
              Kelola yayasan, sekolah, dan pesantren <span class="hero-title-accent">dalam satu sistem</span>
            </h1>
            <p class="hero-subtitle">
              NatiX menghubungkan penerimaan siswa, pembelajaran, keuangan, SDM, hingga operasional harian melalui 14 modul terintegrasi.
            </p>
            <Button href={DEMO_LINK}>Minta Demo</Button>
          </Reveal>
          <Reveal>
          <div class="nx-platform-hero__flow" role="group" aria-label="Alur nilai NatiX">
            <svg class="nx-platform-hero__ribbon" viewBox="0 0 700 220" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="platform-flow" x1="0" y1="160" x2="700" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0056b3" stop-opacity=".12" />
                  <stop offset=".5" stop-color="#2563eb" stop-opacity=".35" />
                  <stop offset="1" stop-color="#0056b3" stop-opacity=".12" />
                </linearGradient>
              </defs>
              <path d="M0 160C70 160 80 100 175 100S245 175 350 120 440 60 525 80 625 100 700 30" stroke="url(#platform-flow)" stroke-width="26" />
              <path d="M0 160C70 160 80 100 175 100S245 175 350 120 440 60 525 80 625 100 700 30" stroke="white" stroke-opacity=".85" stroke-width="2" />
            </svg>
            <ol class="nx-platform-hero__steps" role="list">
              <For each={steps}>{(step) => (
                <li class="nx-platform-hero__step">
                  <span class="nx-platform-hero__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{step.icon}</svg>
                  </span>

                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </li>
              )}</For>
            </ol>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

