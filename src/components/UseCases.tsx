import Reveal from "./Reveal";

export default function UseCases() {
  return (
    <section class="use-cases-section" aria-labelledby="use-cases-title">
      
      <div class="container">
        <Reveal>
          <div class="section-header text-center">
            <p class="use-cases-eyebrow">Solusi Pengelolaan Lembaga Pendidikan</p>
            <h2 id="use-cases-title" class="use-cases-title">
              Solusi Terpadu untuk <span>Seluruh Lembaga</span>
            </h2>
            <p class="use-cases-subtitle">
              Satu platform yang fleksibel untuk berbagai jenis lembaga pendidikan dalam satu yayasan.
            </p>
          </div>
        </Reveal>

        <div class="use-cases-horizontal">
          <Reveal delay={100}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/svg/sekolah_formal.svg" alt="Sekolah Formal" />
              </div>
              <h3>Sekolah Formal</h3>
              <div class="uc-card-wave"></div>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/svg/pesantren.svg" alt="Pesantren" />
              </div>
              <h3>Pesantren</h3>
              <div class="uc-card-wave"></div>
            </article>
          </Reveal>

          <Reveal delay={300}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/svg/boarding_school.svg" alt="Boarding School / Asrama" />
              </div>
              <h3>Boarding School /<br/>Asrama</h3>
              <div class="uc-card-wave"></div>
            </article>
          </Reveal>

          <Reveal delay={400}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/svg/yayasan_pendidikan.svg" alt="Yayasan Pendidikan" />
              </div>
              <h3>Yayasan Pendidikan</h3>
              <div class="uc-card-wave"></div>
            </article>
          </Reveal>

          <Reveal delay={500}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/svg/lembaga_nonformal.svg" alt="Lembaga Pendidikan Nonformal" />
              </div>
              <h3>Lembaga Pendidikan<br/>Nonformal</h3>
              <div class="uc-card-wave"></div>
            </article>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
