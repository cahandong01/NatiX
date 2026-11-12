import { For } from "solid-js";
import Reveal from "./Reveal";
import "./SolusiFoundation.css";

const institutions = [
  { title: "Sekolah", detail: "SD / SMP / SMA", path: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 10h.01M15 10h.01" },
  { title: "Madrasah", detail: "MI / MTs / MA", path: "M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15" },
  { title: "Pesantren", detail: "Diniyah / Asrama", path: "M3 21h18M5 21v-8h14v8M4 13h16M7 13v-2c0-3 5-5 5-7 0 2 5 4 5 7v2M12 4V2M10 21v-4h4v4" },
  { title: "Unit Lain", detail: "RA / TK / Kursus", path: "M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z" },
];

const points = [
  "Manajemen Multi-Lembaga & Cabang",
  "Konsolidasi Data Pendidikan",
  "Standar & Kebijakan Terpusat",
  "Executive Intelligence untuk Pimpinan",
];

export default function SolusiFoundation() {
  return (
    <section class="nx-solusi-foundation" aria-labelledby="solusi-foundation-title">
      <div class="nx-container nx-solusi-foundation__grid">
        <Reveal class="nx-solusi-foundation__heading">
          <p class="nx-solusi-foundation__eyebrow">SOLUSI 03</p>
          <h2 id="solusi-foundation-title">Yayasan <span>Multi-Lembaga</span></h2>
          <p class="nx-solusi-foundation__lead">
            Pantau pendidikan, keuangan, dan operasional seluruh lembaga.
            Tinjau kondisi setiap unit untuk menentukan tindak lanjut bersama pengelolanya.
          </p>
        </Reveal>
        <Reveal class="nx-solusi-foundation__panel nx-solusi-foundation__visual">
          <div class="nx-solusi-foundation__diagram" role="group" aria-label="Yayasan pendidikan menaungi sekolah, madrasah, pesantren, dan unit lain">
            <div class="nx-solusi-foundation__root">
              <img src="/assets/logo-natix.webp" alt="NatiX" width="148" height="40" loading="lazy" decoding="async" />
              <p>Yayasan Pendidikan</p>
            </div>
            <ul class="nx-solusi-foundation__institutions" role="list">
              <For each={institutions}>{(institution) => (
                <li class="nx-solusi-foundation__institution">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={institution.path} /></svg>
                  <h3>{institution.title}</h3>
                  <p>{institution.detail}</p>
                </li>
              )}</For>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120} class="nx-solusi-foundation__panel nx-solusi-foundation__content">
          <ul class="nx-solusi-foundation__points" role="list">
            <For each={points}>{(point) => (
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                  <path d="m7.5 12 3 3 6-6" fill="none" stroke="var(--nx-bg)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{point}</span>
              </li>
            )}</For>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

