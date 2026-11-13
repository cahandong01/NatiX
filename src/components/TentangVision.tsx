import Reveal from "./Reveal";
import "./TentangVision.css";

export default function TentangVision() {
  return (
    <section class="nx-tentang-vision" aria-labelledby="tentang-vision-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-tentang-vision__panel">
            <div class="nx-tentang-vision__heading">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="13" r="9" /><circle cx="11" cy="13" r="5" /><path d="m11 13 9-9M17 3v4h4" /></svg>
              <h2 id="tentang-vision-title">Visi</h2>
            </div>
            <p>Memberdayakan lembaga pendidikan Indonesia melalui teknologi, tata kelola, dan pendampingan yang terintegrasi.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
