import { For } from "solid-js";
import Picture from "./Picture";
import Reveal from "./Reveal";
import "./SolusiSchool.css";

const needs = [
  {
    title: "PPDB & Data Siswa",
    path: "m12 3 10 5-10 5L2 8l10-5ZM6 10v6c4 3 8 3 12 0v-6M22 8v8",
  },
  {
    title: "Akademik & Penilaian",
    path: "M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15",
  },
  {
    title: "Layanan Sekolah",
    path: "M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 10h.01M15 10h.01",
  },
  {
    title: "Tagihan & Pembayaran",
    path: "M3 7h18M3 11h18M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM7 16h4",
  },
];

export default function SolusiSchool() {
  return (
    <section class="nx-solusi-school" aria-labelledby="solusi-school-title">
      <div class="nx-container nx-solusi-school__grid">
        <Reveal class="nx-solusi-school__content">
          <p class="nx-solusi-school__eyebrow">SOLUSI 01</p>
          <h2 id="solusi-school-title">Sekolah &amp; <span>Madrasah</span></h2>
          <p class="nx-solusi-school__lead">
            Tata penerimaan siswa, pembelajaran, dan layanan sekolah dalam satu sistem.
            Dari pendaftaran dan penempatan kelas hingga kehadiran, penilaian, serta informasi bagi wali.
          </p>
          <p class="nx-solusi-school__support">
            Perpustakaan, transportasi antarjemput, dan koperasi mendukung layanan harian.
            Tagihan dapat dibayar online melalui Payment Gateway dan dipantau status pembayarannya.
          </p>
          <ul class="nx-solusi-school__needs" role="list">
            <For each={needs}>{(need) => (
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={need.path} /></svg>
                <span>{need.title}</span>
              </li>
            )}</For>
          </ul>
        </Reveal>
        <Reveal delay={120} class="nx-solusi-school__visual">
          <Picture
            name="solusi-school-phones-v1"
            alt="Ilustrasi dua ponsel NatiX Family menampilkan perkembangan anak dan kegiatan pendidikan bagi wali."
            width={1532}
            height={1027}
            widths={[480, 800, 1200]}
            sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 991px) 560px, (max-width: 1280px) 47vw, 611px"
            class="nx-solusi-school__image"
          />
        </Reveal>
      </div>
    </section>
  );
}


