import Button from "./Button";
import Reveal from "./Reveal";
import { DEMO_LINK } from "../site";
import "./HomeClosing.css";

export default function HomeClosing() {
  return (
    <section class="nx-home-closing" aria-labelledby="nx-home-closing-title">
      <div class="container">
        <Reveal>
          <div class="nx-home-closing__panel">
            <div>
              <h2 id="nx-home-closing-title">Siap Menata Pengelolaan Pendidikan <span>di Lembaga Anda?</span></h2>
              <p>Ceritakan kebutuhan yayasan dan lembaga Anda. Lihat bagaimana NatiX menghubungkan operasional, data, dan keputusan dalam satu ekosistem.</p>
            </div>
            <div class="nx-home-closing__action">
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
