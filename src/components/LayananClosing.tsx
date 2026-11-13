import Button from "./Button";
import Reveal from "./Reveal";
import { PILOT_LINK } from "../site";
import "./HomeClosing.css";
import "./LayananClosing.css";

export default function LayananClosing() {
  return (
    <section class="nx-home-closing nx-layanan-closing" aria-labelledby="layanan-closing-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-home-closing__panel">
            <div>
              <h2 id="layanan-closing-title">Mulai perubahan yang terarah <span>bersama NatiX.</span></h2>
            </div>
            <div class="nx-home-closing__action">
              <Button href={PILOT_LINK} variant="secondary">
                Mulai Program Pilot
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </Button>
              <p class="nx-layanan-closing__note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>
                <span>Jadwalkan konsultasi dengan Tim NatiX</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
