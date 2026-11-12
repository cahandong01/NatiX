import { createSignal, onMount, onCleanup } from "solid-js";
import Reveal from "./Reveal";

// Helper hook agar Hero.jsx tetap bersih dan maintainable
function useParallax(speed = 0.4) {
  const [offset, setOffset] = createSignal(0);
  
  const handleScroll = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOffset(0);
      return;
    }
    requestAnimationFrame(() => {
      setOffset(window.scrollY * speed);
    });
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  return offset;
}

export default function Hero() {
  const scrollOffset = useParallax(0.4);

  return (
    <section class="hero-section">
      <div class="hero-bg-wrapper">
        <img
          src="/assets/hero_bg.png"
          alt="NatiX Hero Background"
          class="hero-bg-img"
          style={{
            transform: `translateY(${scrollOffset()}px) scale(1.1)`,
            "will-change": "transform"
          }}
        />
      </div>

      <div class="container hero-container">
        <div class="hero-grid">
          <Reveal>
            <div class="hero-content">
              <p class="hero-eyebrow">PLATFORM ERP PENDIDIKAN ENTERPRISE</p>
              <h1 class="hero-title">Satu Sistem, <span class="hero-title-accent">Semua Tertata</span></h1>
              <p class="hero-subtitle">
                Platform ERP terintegrasi untuk digitalisasi total seluruh ekosistem dan 
                institusi pendidikan. Kendalikan manajemen akademik, administrasi keuangan, 
                hingga tata kelola fasilitas asrama dan aktivitas harian dalam satu 
                infrastruktur modern yang terpusat, aman, dan berskala enterprise.
              </p>
              
              <div class="hero-buttons">
                <a 
                  href="https://wa.me/6285815227572?text=Halo%2C%20saya%20ingin%20meminta%20demo%20NatiX" 
                  class="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Minta Demo
                </a>
                <a 
                  href="https://wa.me/6285815227572?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20NatiX" 
                  class="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                </a>
              </div>
              <ul class="hero-highlights" aria-label="Fondasi NatiX">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V9h6v12M13 21V3h6v18M8 12v2M8 17v1M16 6v2M16 11v2M16 16v2" /></svg>
                  <span>Multi Lembaga</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v5M5 16v-4h14v4" /><rect x="8" y="2" width="8" height="5" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /></svg>
                  <span>Multi Cabang</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5" /></svg>
                  <span>Multi Tenant</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7zM8 12l3 3 5-6" /></svg>
                  <span>Kelas Enterprise</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div class="hero-illustration-wrapper">
              <img
                src="/assets/hero_illustration.png"
                alt="NatiX ERP Illustration"
                class="hero-illustration"
              />
            </div>
          </Reveal>
        </div>
      </div>
      
      <div class="hero-wave-silhouette"></div>
    </section>
  );
}