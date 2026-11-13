import Button from "./Button";
import Reveal from "./Reveal";
import { DEMO_LINK } from "../site";
import "./TentangClosing.css";

export default function TentangClosing() {
  return (
    <section class="nx-tentang-closing" aria-labelledby="tentang-closing-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-tentang-closing__panel">
            <h2 id="tentang-closing-title">Siap Memulai Transformasi Pendidikan <span>di Lembaga Anda?</span></h2>
            <Button href={DEMO_LINK}>
              Minta Demo Sekarang
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
