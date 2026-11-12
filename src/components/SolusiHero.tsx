import { For, type JSX } from "solid-js";
import Reveal from "./Reveal";
import "./SolusiHero.css";

const points: { title: string; icon: JSX.Element }[] = [
  {
    title: "Satu Platform Terintegrasi",
    icon: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
  },
  {
    title: "Sesuai Kebutuhan Lembaga",
    icon: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  },
  {
    title: "Mendukung Pertumbuhan Lembaga",
    icon: <><path d="M4 21h16" /><rect x="5" y="12" width="3" height="6" rx="1" /><rect x="11" y="8" width="3" height="10" rx="1" /><rect x="17" y="3" width="3" height="15" rx="1" /></>,
  },
];

export default function SolusiHero() {
  return (
    <section class="hero-section nx-solusi-hero" aria-labelledby="solusi-title">
      <div class="nx-solusi-hero__container">
        <Reveal class="nx-solusi-hero__content">
          <p class="hero-eyebrow">SOLUSI NATIX</p>
          <h1 id="solusi-title" class="hero-title">
            Satu Platform, Beragam Solusi
            <span class="hero-title-accent">untuk Setiap Model Lembaga</span>
          </h1>
          <p class="hero-subtitle">
            NatiX membantu menata pendidikan, administrasi, dan layanan operasional sesuai kebutuhan sekolah, madrasah, pesantren, boarding, serta yayasan multi-lembaga.
          </p>
          <ul class="nx-solusi-hero__points" role="list">
            <For each={points}>{(point) => (
              <li class="nx-solusi-hero__point">
                <span class="nx-solusi-hero__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{point.icon}</svg>
                </span>
                <span>{point.title}</span>
              </li>
            )}</For>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
