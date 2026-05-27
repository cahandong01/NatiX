import Reveal from "./Reveal";

export default function Challenges() {
  return (
    <section class="challenges-section">
      <div class="challenges-bg-wrapper">
        <img
          src="/assets/svg/background_cityscape_more_buildings.svg"
          alt="Cityscape Background"
          class="challenges-bg-img"
        />
      </div>
      <div class="challenges-gradient-overlay"></div>

      <div class="container challenges-container">
        <Reveal>
          <div class="section-header text-center">
            <h2 class="challenges-title">Tantangan Umum Lembaga Pendidikan Saat Ini</h2>
            <p class="challenges-subtitle">
              Banyak lembaga pendidikan masih menghadapi kendala klasik yang
              menghambat kinerja dan transparansi.
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
              <img
                src="/assets/section2_dashboard.png"
                alt="Dashboard Preview"
                class="dashboard-img-actual"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <div class="challenges-footer text-center">
            <p class="challenges-closing-text">
              Akibatnya, pengelolaan menjadi tidak efisien dan sulit dikembangkan.
            </p>
          </div>
        </Reveal>
      </div>
      <div class="challenges-wave-silhouette"></div>
    </section>
  );
}

