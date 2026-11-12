import Reveal from "./Reveal";
import Picture from "./Picture";
import "./ChallengesComparison.css";

export default function ChallengesComparison() {
  return (
    <section class="challenges-section nx-challenges-comparison" aria-labelledby="challenges-comparison-title">

      <div class="container challenges-container">
        <Reveal>
          <div class="section-header text-center">
            <p class="challenges-eyebrow">TANTANGAN PENGELOLAAN</p>
            <h2 id="challenges-comparison-title" class="challenges-title">Empat Hambatan yang Membuat Lembaga Pendidikan <span>Sulit Berkembang</span></h2>
            <p class="challenges-subtitle">
              Catatan manual, data yang tersebar, dan laporan yang terlambat membuat pimpinan memutuskan tanpa gambaran yang utuh.
            </p>
          </div>
        </Reveal>

        <div class="challenges-grid">
          <Reveal delay={200}>
            <div class="challenges-cards">
              <article class="challenge-card">
                <div class="card-illustration">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></svg>
                </div>
                <h3>Data tersebar &<br/>tidak sinkron</h3>
              </article>
              <article class="challenge-card">
                <div class="card-illustration">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 12h6M9 17h4" /></svg>
                </div>
                <h3>Administrasi manual<br/>yang melelahkan</h3>
              </article>
              <article class="challenge-card">
                <div class="card-illustration">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M6 13l4-4 4 2 4-4" /></svg>
                </div>
                <h3>Monitoring siswa<br/>belum real-time</h3>
              </article>
              <article class="challenge-card">
                <div class="card-illustration">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 17v-3M12 17v-5M16 17v-3" /></svg>
                </div>
                <h3>Laporan lambat<br/>& rawan kesalahan</h3>
              </article>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div class="challenges-dashboard-preview">
              <Picture
                name="gbrdashboard2"
                alt="Ilustrasi dashboard NatiX pada laptop dan perkembangan anak pada ponsel wali"
                width={612}
                height={408}
                widths={[480, 612]}
                sizes="(max-width: 632px) calc(100vw - 20px), 612px"
                class="dashboard-img-actual"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
