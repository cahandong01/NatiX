import { For } from "solid-js";
import Button from "./Button";
import Reveal from "./Reveal";
import { PILOT_LINK } from "../site";
import "./LayananPilot.css";

const points = [
  "Ruang lingkup fleksibel sesuai kebutuhan",
  "Evaluasi hasil secara objektif",
  "Pendampingan intensif dari tim NatiX",
  "Rencana implementasi skala penuh",
];

export default function LayananPilot() {
  return (
    <section class="nx-layanan-pilot" aria-labelledby="layanan-pilot-title">
      <div class="nx-container">
        <div class="nx-layanan-pilot__panel">
          <Reveal class="nx-layanan-pilot__visual">
            <div class="nx-layanan-pilot__clipboard" aria-hidden="true">
              <span class="nx-layanan-pilot__clip" />
              <span class="nx-layanan-pilot__label">Program<br />Pilot</span>
              <For each={[1, 2, 3]}>{() => (
                <span class="nx-layanan-pilot__row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
                  <span />
                </span>
              )}</For>
              <span class="nx-layanan-pilot__seal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 12 4 4 8-9" /></svg>
              </span>
            </div>
          </Reveal>
          <Reveal delay={90} class="nx-layanan-pilot__content">
            <p class="nx-layanan-pilot__eyebrow">Program Pilot</p>
            <h2 id="layanan-pilot-title">Mulai dari skala kecil, <span>menuju dampak besar</span></h2>
            <p class="nx-layanan-pilot__lead">
              Program pilot memungkinkan lembaga Anda merasakan langsung manfaat NatiX dalam ruang lingkup terbatas, sebelum implementasi penuh.
            </p>
          </Reveal>
          <Reveal delay={180} class="nx-layanan-pilot__details">
            <ul role="list">
              <For each={points}>{(point) => (
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
                  <span>{point}</span>
                </li>
              )}</For>
            </ul>
            <Button href={PILOT_LINK} variant="secondary">
              Diskusikan Program Pilot
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
