import Picture from "./Picture";
import Reveal from "./Reveal";
import "./PlatformInsights.css";

export default function PlatformInsights() {
  return (
    <section class="nx-platform-insights" aria-labelledby="platform-insights-title">
      <div class="nx-container nx-platform-insights__grid">
        <Reveal class="nx-platform-insights__content">
          <p class="nx-platform-insights__eyebrow">EDUCATION INSIGHTS</p>
          <h2 id="platform-insights-title">Ubah data harian menjadi <span>arah pendidikan yang jelas</span></h2>
          <p class="nx-platform-insights__lead">
            Kehadiran, nilai, pembinaan, serta capaian kitab dan tahfidz membentuk gambaran perkembangan siswa dan santri.
            Kenali polanya, tentukan pendampingan yang diperlukan, lalu pantau tindak lanjutnya.
          </p>
        </Reveal>
        <Reveal delay={120} class="nx-platform-insights__visual">
          <Picture
            name="education-insights-transparent-v3"
            alt="Education Insights NatiX: analisis pembelajaran, ringkasan insight, kehadiran siswa, dan rekomendasi tindakan."
            width={1851}
            height={850}
            widths={[480, 720, 960]}
            sizes="(max-width: 991px) calc(100vw - 40px), (max-width: 1280px) 60vw, 745px"
            class="nx-platform-insights__image"
          />
        </Reveal>
      </div>
    </section>
  );
}
