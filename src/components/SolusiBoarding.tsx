import { For } from "solid-js";
import Picture from "./Picture";
import Reveal from "./Reveal";
import "./SolusiBoarding.css";

const points = [
  "Pendidikan Diniyah, Kitab & Tahfidz",
  "Asrama & Hunian",
  "Perizinan & Pembinaan",
  "Dapur & Makan",
  "Perpustakaan & Koperasi",
  "Tagihan, Pembayaran & Informasi Wali",
];

export default function SolusiBoarding() {
  return (
    <section class="nx-solusi-boarding" aria-labelledby="solusi-boarding-title">
      <div class="nx-container nx-solusi-boarding__grid">
        <Reveal class="nx-solusi-boarding__visual">
          <figure>
            <Picture
              name="solusi-boarding-tablet-v1"
              alt="Ilustrasi tablet NatiX dengan dashboard pesantren, ringkasan santri, asrama, halaqah, dan kegiatan pembinaan."
              width={1752}
              height={897}
              widths={[480, 800, 1200]}
              sizes="(max-width: 991px) calc(100vw - 40px), (max-width: 1280px) 46vw, 596px"
              class="nx-solusi-boarding__image"
            />
          </figure>
        </Reveal>
        <Reveal delay={120} class="nx-solusi-boarding__content">
          <p class="nx-solusi-boarding__eyebrow">SOLUSI 02</p>
          <h2 id="solusi-boarding-title">Pesantren &amp; <span>Boarding</span></h2>
          <p class="nx-solusi-boarding__lead">
            Tata pembelajaran dan keseharian santri, dari kelas, halaqah, dan tahfidz hingga hunian asrama, perizinan, serta kebutuhan makan.
          </p>
          <ul class="nx-solusi-boarding__points" role="list">
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


