import { For } from "solid-js";
import Picture from "./Picture";
import Reveal from "./Reveal";
import "./PlatformExecutive.css";

export default function PlatformExecutive() {
  return (
    <section class="nx-platform-executive" aria-labelledby="platform-executive-title">
      <div class="nx-container nx-platform-executive__grid">
        <Reveal class="nx-platform-executive__visual">
        <figure>
          <Picture
            name="dashboard3-tight"
            alt="Contoh dashboard Executive Intelligence NatiX dengan ringkasan dan perbandingan kondisi lintas lembaga"
            width={568}
            height={344}
            widths={[480, 568]}
            sizes="(max-width: 991px) calc(100vw - 40px), (max-width: 1280px) 52vw, 612px"
            class="nx-platform-executive__image"
          />

        </figure>
        </Reveal>
        <Reveal delay={120} class="nx-platform-executive__content">
          <p class="nx-platform-executive__eyebrow">EXECUTIVE INTELLIGENCE</p>
          <h2 id="platform-executive-title">
            Dashboard pimpinan untuk <span>seluruh lembaga</span>
          </h2>
          <p class="nx-platform-executive__lead">
            Pilih ringkasan seluruh yayasan atau fokus pada satu lembaga.
            Pantau data pendidikan, keuangan, layanan pendukung, dan unit usaha dalam satu dashboard.
          </p>
          <ul class="nx-platform-executive__points" role="list">
            <For each={[
              "Jumlah lembaga, siswa/santri, serta guru dan pegawai",
              "Pendapatan, pembayaran, dan tunggakan biaya pendidikan",
              "Ringkasan akademik, layanan pendukung, dan unit usaha",
              "Perbandingan kondisi dan capaian antarunit pendidikan",
            ]}>{(point) => (
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" />
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

