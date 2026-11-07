import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import "./Platform.css";

const capabilities = [
  { number: "01", name: "Tata Kelola", detail: "Pengelolaan organisasi" },
  { number: "02", name: "Akademik", detail: "Pendidikan formal" },
  { number: "03", name: "Pesantren", detail: "Pendidikan kepesantrenan" },
  { number: "04", name: "Keuangan", detail: "Administrasi finansial" },
  { number: "05", name: "SDM & Aset", detail: "Sumber daya lembaga" },
  { number: "06", name: "Operasional", detail: "Layanan penunjang" },
];

export default function Platform() {
  return (
    <>
      <StickyHeader />
      <main class="nx-platform">
        <section class="nx-platform-overview" aria-labelledby="platform-title">
          <div class="nx-platform-container">

            <div class="nx-platform-heading">
              <div class="nx-platform-side">
                <span class="nx-platform-side-line" />
                <span>THE NATIX PLATFORM</span>
                <span class="nx-platform-edition">ENTERPRISE EDUCATION ERP</span>
              </div>

              <div class="nx-platform-headline">
                <span class="nx-platform-overline">PLATFORM / 01</span>
                <h1 id="platform-title">
                  Satu Platform untuk
                  <span> Seluruh Ekosistem Pendidikan.</span>
                </h1>
              </div>

              <div class="nx-platform-summary">
                <p>
                  Dari kendali yayasan hingga proses harian setiap lembaga,
                  NatiX dirancang agar data dan operasional dapat dikelola
                  secara terstruktur.
                </p>
                <a href="#platform-capabilities" class="nx-platform-explore">
                  Eksplorasi Platform
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div class="nx-platform-system">
              <div class="nx-platform-system-top">
                <div class="nx-platform-system-ident">
                  <span class="nx-platform-live-dot" />
                  <span>UNIFIED EDUCATION ECOSYSTEM</span>
                </div>
                <span>STRUKTUR KONSEPTUAL</span>
              </div>

              <div class="nx-platform-system-content">
                <div class="nx-platform-system-copy">
                  <span class="nx-platform-system-label">
                    SATU PUSAT PENGELOLAAN
                  </span>
                  <h2>
                    Kompleksitas organisasi.
                    <span> Satu kendali.</span>
                  </h2>
                  <p>
                    Setiap lembaga memiliki kebutuhan operasional berbeda,
                    dengan tata kelola yang terhubung pada tingkat yayasan.
                  </p>
                </div>

                <div class="nx-platform-structure" aria-label="Ilustrasi struktur yayasan dan tiga jenis lembaga">
                  <div class="nx-platform-foundation">
                    <div class="nx-platform-foundation-icon" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div>
                      <small>FOUNDATION LEVEL</small>
                      <strong>Yayasan Pendidikan</strong>
                      <span>Pengelolaan terpusat</span>
                    </div>
                    <span class="nx-platform-foundation-symbol" aria-hidden="true">↗</span>
                  </div>

                  <div class="nx-platform-tree" aria-hidden="true">
                    <div class="nx-platform-tree-stem" />
                    <div class="nx-platform-tree-bar" />
                  </div>

                  <div class="nx-platform-branches">
                    <div class="nx-platform-branch">
                      <div class="nx-platform-branch-top">
                        <span>01</span>
                        <span class="nx-platform-branch-mark" />
                      </div>
                      <strong>Sekolah</strong>
                      <small>Formal & Madrasah</small>
                    </div>
                    <div class="nx-platform-branch">
                      <div class="nx-platform-branch-top">
                        <span>02</span>
                        <span class="nx-platform-branch-mark" />
                      </div>
                      <strong>Pesantren</strong>
                      <small>Program & Pembelajaran</small>
                    </div>
                    <div class="nx-platform-branch">
                      <div class="nx-platform-branch-top">
                        <span>03</span>
                        <span class="nx-platform-branch-mark" />
                      </div>
                      <strong>Asrama</strong>
                      <small>Hunian & Operasional</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="nx-platform-system-bottom">
                <span>FOUNDATION-FIRST ARCHITECTURE</span>
                <span>01 — 03 / ORGANIZATION MODEL</span>
              </div>
            </div>

            <div class="nx-platform-capabilities" id="platform-capabilities">
              <div class="nx-platform-capabilities-intro">
                <span>CAKUPAN PLATFORM</span>
                <p>Enam pilar dalam satu ekosistem.</p>
              </div>
              <div class="nx-platform-capabilities-grid">
                {capabilities.map((item) => (
                  <div class="nx-platform-capability">
                    <span class="nx-platform-capability-num">{item.number}</span>
                    <strong>{item.name}</strong>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </div>

            <div class="nx-platform-next">
              <span>JELAJAHI NATIX</span>
              <a href="/kontak">
                Diskusikan kebutuhan lembaga Anda
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}