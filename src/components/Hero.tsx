import { createSignal, onMount, onCleanup } from "solid-js";
import Reveal from "./Reveal";

// Helper hook agar Hero.jsx tetap bersih dan maintainable
function useParallax(speed = 0.4) {
  const [offset, setOffset] = createSignal(0);
  
  const handleScroll = () => {
    requestAnimationFrame(() => {
      setOffset(window.scrollY * speed);
    });
  };

  onMount(() => window.addEventListener("scroll", handleScroll, { passive: true }));
  onCleanup(() => window.removeEventListener("scroll", handleScroll));

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
              <h1 class="hero-title">Satu Sistem, Semua Tertata</h1>
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