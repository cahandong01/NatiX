import { createSignal, onMount, onCleanup } from "solid-js";
import { useNavigate } from "@solidjs/router";

const HeaderContent = (props: {
  mobileMenuOpen: () => boolean;
  toggleMobileMenu: () => void;
  scrollToSection: (id: string) => void;
  navigateTo: (path: string) => void;
}) => {
  return (
    <div class="sticky-header-content">
      <div
        class="sticky-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/assets/svg/logosvg.svg"
          alt="NatiX Logo"
          class="sticky-logo-img"
        />
      </div>
      <nav class="sticky-nav">
        <button onClick={() => props.navigateTo("/")}>
          Beranda
        </button>
        <button onClick={() => props.navigateTo("/platform")}>
          Platform
        </button>
        <button onClick={() => props.navigateTo("/solusi")}>
          Solusi
        </button>
        <button onClick={() => props.navigateTo("/kontak")}>
          Hubungi Kami
        </button>
      </nav>
      <div class="sticky-buttons">
        <a
          href="https://demo.natix.id"
          class="sticky-cta-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        class={`hamburger-btn ${props.mobileMenuOpen() ? "open" : ""}`}
        onClick={props.toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default function StickyHeader() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = createSignal(false);
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  // Scroll threshold > 0px for immediate transition
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  onMount(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navigateTo = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen());
  };

  return (
    <>
      {/* 1. Static Header: Always at the top, scrolls away */}
      <header class="sticky-header static">
        <HeaderContent
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          scrollToSection={scrollToSection}
          navigateTo={navigateTo}
        />
      </header>

      {/* 2. Fixed Header: Slides in when scrolled */}
      <header class={`sticky-header fixed ${isScrolled() ? "visible" : ""}`}>
        <HeaderContent
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          scrollToSection={scrollToSection}
          navigateTo={navigateTo}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <div
        class={`mobile-menu-overlay ${mobileMenuOpen() ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div class={`mobile-menu ${mobileMenuOpen() ? "open" : ""}`}>
        <div class="mobile-menu-header">
          <img
            src="/assets/svg/logosvg.svg"
            alt="NatiX Logo"
            class="mobile-menu-logo-img"
          />
          <button
            class="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav class="mobile-menu-nav">
          <button onClick={() => navigateTo("/")}>
            Beranda
          </button>
          <button onClick={() => navigateTo("/platform")}>
            Platform
          </button>
          <button onClick={() => navigateTo("/solusi")}>
            Solusi
          </button>
          <button onClick={() => navigateTo("/kontak")}>
            Hubungi Kami
          </button>
        </nav>
        <div class="mobile-menu-buttons">
          <a
            href="https://demo.natix.id"
            class="mobile-cta-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}
