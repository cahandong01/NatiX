import Reveal from "./Reveal";
import Picture from "./Picture";

export default function Challenges() {
  return (
    <section class="challenges-section" aria-labelledby="challenges-title">

      <div class="container challenges-container">
        <Reveal>
          <div class="section-header text-center">
            <p class="challenges-eyebrow">TANTANGAN PENGELOLAAN</p>
            <h2 id="challenges-title" class="challenges-title">Empat Hambatan yang Membuat Lembaga Pendidikan <span>Sulit Berkembang</span></h2>
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
                  <img src="/assets/challenge_data.png" alt="Data Sync Icon" />
                </div>
                <h3>Data tersebar &<br/>tidak sinkron</h3>
              </article>
              <article class="challenge-card">
                <div class="card-illustration">
                  <img src="/assets/challenge_administrasi.png" alt="Manual Admin Icon" />
                </div>
                <h3>Administrasi manual<br/>yang melelahkan</h3>
              </article>
              <article class="challenge-card">
                <div class="card-illustration">
                  <img src="/assets/challenge_monitoring.png" alt="Student Monitoring Icon" />
                </div>
                <h3>Monitoring siswa<br/>belum real-time</h3>
              </article>
              <article class="challenge-card">
                <div class="card-illustration">
                  <img src="/assets/challenge_laporan.png" alt="Report Errors Icon" />
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

