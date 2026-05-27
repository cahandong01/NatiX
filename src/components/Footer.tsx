export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="container footer-container">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="/assets/svg/logosvg.svg" alt="NatiX Logo" class="footer-logo-img" />
          </div>
          <p class="footer-tagline">Satu Sistem, Semua Tertata.</p>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
          <div class="footer-item">
            <span class="footer-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span>Magelang, Jawa Tengah</span>
          </div>
          <span class="footer-separator">|</span>
          <a 
            href="https://wa.me/6289525841982?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20NatiX" 
            class="footer-item footer-item-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="footer-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span class="footer-item-text">
              <span>Konsultasi via Whatsapp</span>
              <span class="footer-phone">0895 2584 1982</span>
            </span>
          </a>
          <span class="footer-separator">|</span>
          <div class="footer-item">
            <span class="footer-item-icon copyright-icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </span>
            <span>© {new Date().getFullYear()} NatiX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
