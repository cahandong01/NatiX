import Reveal from "./Reveal";
import "./TentangHero.css";

export default function TentangHero() {
  return (
    <section class="hero-section nx-tentang-hero" aria-labelledby="tentang-title">
      <div class="nx-container">
        <Reveal>
          <p class="hero-eyebrow">TENTANG NATIX</p>
          <h1 id="tentang-title" class="hero-title">
            Mitra Transformasi Digital<br class="nx-tentang-hero__break" /> Pendidikan <span class="hero-title-accent">di Indonesia</span>
          </h1>
          <p class="hero-subtitle">
            NatiX membantu yayasan, sekolah, madrasah, pesantren, dan asrama menghubungkan operasional, data, dan keputusan dalam satu ekosistem pendidikan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
