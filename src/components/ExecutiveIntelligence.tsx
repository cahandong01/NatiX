import Button from "./Button";
import Picture from "./Picture";
import Reveal from "./Reveal";
import "./ExecutiveIntelligence.css";

export default function ExecutiveIntelligence() {
  return (
    <section class="nx-executive" aria-labelledby="nx-executive-title">
      <div class="container nx-executive__grid">
        <Reveal class="nx-executive__visual">
          <figure>
            <Picture
              name="gbrlaptop1"
              alt="Dashboard NatiX dengan pilihan Semua Lembaga dan ringkasan kondisi yayasan"
              width={612}
              height={408}
              widths={[480, 612]}
              sizes="(max-width: 991px) calc(100vw - 40px), (max-width: 1280px) 52vw, 612px"
              class="nx-executive__image"
            />
          </figure>
        </Reveal>
        <Reveal delay={120} class="nx-executive__content">
          <p class="nx-executive__eyebrow">Executive Intelligence</p>
          <h2 id="nx-executive-title">
            Kendali Strategis untuk <span>Pimpinan Yayasan</span>
          </h2>
          <p class="nx-executive__lead">
            Lihat kondisi seluruh lembaga dalam satu pandangan. Hubungkan catatan operasional dengan evaluasi dan prioritas yayasan.
          </p>
          <ul class="nx-executive__points" role="list">
            <li><CheckIcon />Pandangan lintas lembaga dan unit pendidikan</li>
            <li><CheckIcon />Ringkasan akademik, keuangan, dan operasional</li>
            <li><CheckIcon />Data sebagai dasar keputusan dan tindak lanjut</li>
          </ul>
          <Button href="/platform">Lihat Platform</Button>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}
