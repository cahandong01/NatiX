import { For, type JSX } from "solid-js";
import { Container, Eyebrow } from "./Primitives";
import Reveal from "./Reveal";
import "./ValueChain.css";

const steps = [
  {
    title: "Operasional Harian",
    description: "Kegiatan sekolah, pesantren, keuangan, dan SDM tercatat di tempatnya.",
    icon: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M16 3v4M8 3v4M4 11h16M8 15h2M14 15h2M8 18h2" /></>,
  },
  {
    title: "Data Terintegrasi",
    description: "Catatan antarbagian terhubung menjadi satu sumber informasi.",
    icon: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  },
  {
    title: "Wawasan Pendidikan",
    description: "Data menjadi tren dan evaluasi untuk menentukan tindak lanjut.",
    icon: <><path d="M4 21h16" /><rect x="5" y="12" width="3" height="6" rx="1" /><rect x="11" y="8" width="3" height="10" rx="1" /><rect x="17" y="3" width="3" height="15" rx="1" /></>,
  },
  {
    title: "Keputusan Pimpinan",
    description: "Kondisi lintas lembaga menjadi dasar penentuan prioritas yayasan.",
    icon: <><path d="M4 20V10M10 20v-6M16 20v-9M3 7l6-3 6 3 6-5M16 2h5v5" /></>,
  },
  {
    title: "Tindakan Bersama",
    description: "Pendidik, staf, dan keluarga menindaklanjuti sesuai peran dan kewenangan.",
    icon: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  },
] satisfies { title: string; description: string; icon: JSX.Element }[];

export default function ValueChain() {
  return (
    <section class="nx-value-chain" aria-labelledby="nx-value-chain-title">
      <Container>
        <Reveal>
          <div class="nx-value-chain__heading">
            <Eyebrow>Ekosistem NatiX</Eyebrow>
            <h2 id="nx-value-chain-title">
              Dari Kegiatan Harian sampai <span>Keputusan yang Tepat</span>
            </h2>
            <p>Menghubungkan operasional, data, dan tindak lanjut dalam satu alur pendidikan yang terpadu.</p>
          </div>
        </Reveal>
        <ol class="nx-value-chain__steps" role="list">
          <For each={steps}>{(step, index) => (
            <li class="nx-value-chain__step">
              <Reveal delay={index() * 90}>
                <div class="nx-value-chain__card">
                  <span class="nx-value-chain__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      {step.icon}
                    </svg>
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
              {index() < steps.length - 1 && (
                <svg class="nx-value-chain__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
              )}
            </li>
          )}</For>
        </ol>
      </Container>
    </section>
  );
}
