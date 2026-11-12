import Button from "./Button";
import Reveal from "./Reveal";
import { DEMO_LINK } from "../site";
import "./PlatformClosing.css";

export default function PlatformClosing() {
  return (
    <section class="nx-platform-closing" aria-labelledby="platform-closing-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-platform-closing__layout">
            <div>
              <h2 id="platform-closing-title">Lihat NatiX bekerja <span>untuk lembaga Anda</span></h2>
              <p>Ceritakan kebutuhan yayasan, sekolah, atau pesantren Anda. Kenali alur dan modul yang relevan melalui demo NatiX.</p>
            </div>
            <div class="nx-platform-closing__action">
              <Button href={DEMO_LINK} variant="secondary">
                Minta Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
