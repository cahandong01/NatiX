import Reveal from "./Reveal";

const benefits = [
  {
    number: "01",
    title: "Operasional Lebih Terintegrasi",
    description:
      "Semua aktivitas akademik, administrasi, keuangan, hingga fasilitas terhubung dalam satu sistem terpusat yang efisien.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="26" height="26">
        <circle cx="12" cy="12" r="2.5"/>
        <circle cx="4" cy="12" r="1.5"/>
        <circle cx="20" cy="12" r="1.5"/>
        <circle cx="12" cy="4" r="1.5"/>
        <circle cx="12" cy="20" r="1.5"/>
        <line x1="6" y1="12" x2="9.5" y2="12"/>
        <line x1="14.5" y1="12" x2="18" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="9.5"/>
        <line x1="12" y1="14.5" x2="12" y2="18"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Transparansi & Akuntabilitas",
    description:
      "Data real-time dan laporan otomatis meningkatkan transparansi serta membangun kepercayaan di semua level.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="26" height="26">
        <rect x="3" y="12" width="4" height="9" rx="1"/>
        <rect x="10" y="7" width="4" height="14" rx="1"/>
        <rect x="17" y="3" width="4" height="18" rx="1"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fondasi Pertumbuhan Jangka Panjang",
    description:
      "Infrastruktur digital yang fleksibel dan aman, dirancang untuk tumbuh bersama lembaga Anda dari hari ini hingga masa depan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="26" height="26">
        <path d="M12 3L4 7v5c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V7L12 3z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section class="benefits-section">
      <div class="benefits-bg-left"></div>
      <div class="benefits-bg-right"></div>

      <div class="container benefits-content">
        <div class="benefits-layout">

          {/* Kiri — heading */}
          <Reveal>
            <div class="benefits-left">           
              <h2 class="benefits-title">
                Lebih dari Sekadar{" "}
                <span class="benefits-title-accent">Platform</span>
              </h2>
              <p class="benefits-subtitle">
                NatiX bukan hanya software, tetapi mitra transformasi digital
                lembaga pendidikan yang membantu Anda bekerja lebih cerdas,
                transparan, dan siap berkembang.
              </p>
              <div class="benefits-tagline-box">
                <span class="benefits-tagline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                    <circle cx="9" cy="7" r="3"/>
                    <circle cx="15" cy="7" r="3"/>
                    <path d="M3 20c0-4 2.7-7 6-7h6c3.3 0 6 3 6 7"/>
                  </svg>
                </span>
                <span class="benefits-tagline-text">
                  Teknologi yang bekerja untuk manusia, bukan sebaliknya.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Kanan — cards */}
          <div class="benefits-right">
            {benefits.map((b, i) => (
              <Reveal delay={i * 150}>
                <div class="benefit-card">
                  <div class="benefit-card-number">{b.number}</div>
                  <div class="benefit-card-body">
                    <h3 class="benefit-card-title">{b.title}</h3>
                    <p class="benefit-card-desc">{b.description}</p>
                  </div>
                  <div class="benefit-card-icon">{b.icon}</div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      <div class="benefits-wave-silhouette"></div>
    </section>
  );
}