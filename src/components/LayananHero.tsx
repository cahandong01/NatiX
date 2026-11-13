import Reveal from "./Reveal";
import "./LayananHero.css";

export default function LayananHero() {
  return (
    <section class="hero-section nx-layanan-hero" aria-labelledby="layanan-title">
      <div class="nx-layanan-hero__container">
        <Reveal class="nx-layanan-hero__content">
          <p class="hero-eyebrow">LAYANAN NATIX</p>
          <h1 id="layanan-title" class="hero-title">
            Lebih dari implementasi sistem.
            <span class="hero-title-accent">Menuju pengelolaan lembaga yang lebih matang.</span>
          </h1>
          <p class="hero-subtitle">
            NatiX mendampingi penerapan sistem dan pengembangan manajemen, agar tim lebih siap dan pengelolaan lembaga lebih tertata.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
