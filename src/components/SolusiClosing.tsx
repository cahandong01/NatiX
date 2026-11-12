import Button from "./Button";
import Reveal from "./Reveal";
import { DEMO_LINK } from "../site";
import "./SolusiClosing.css";

export default function SolusiClosing() {
  return (
    <section class="nx-solusi-closing" aria-labelledby="solusi-closing-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-solusi-closing__layout">
            <div>
              <h2 id="solusi-closing-title">Temukan solusi <span>sesuai lembaga Anda</span></h2>
              <p>Ceritakan kebutuhan sekolah, pesantren, atau yayasan Anda. Lihat bagaimana NatiX mendukung alur kerja lembaga melalui demo.</p>
            </div>
            <div class="nx-solusi-closing__action">
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

