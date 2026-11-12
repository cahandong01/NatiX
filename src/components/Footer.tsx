import { For, Show } from "solid-js";
import { PAGES } from "../seo";
import { SITE, waLink } from "../site";
import { Container } from "./Primitives";
import Button from "./Button";
import Link from "./Link";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <footer class="nx-footer">
      <Container>
        <div class="nx-footer__grid">
          <div class="nx-footer__brand">
            <Link href="/" class="nx-footer__logo">
              <img src="/assets/logo-natix.webp" alt="NatiX" width="196" height="53" loading="lazy" />
            </Link>
            <p class="nx-footer__description">
              Natix adalah platform ERP Enterprise yang menyatukan tata kelola yayasan, operasional lintas lembaga, dan keterhubungan keluarga. Dari pencatatan harian hingga keputusan strategis, seluruhnya terhubung dalam satu ekosistem.
            </p>
            <ul class="nx-footer__socials" aria-label="Media sosial NatiX">
              <For each={SITE.socials}>{(social) => (
                <li>
                  <Show when={social.href} fallback={
                    <span class="nx-footer__social nx-footer__social--inactive" role="img" aria-label={`${social.label} — tautan belum tersedia`} title={social.label}>
                      <SocialIcon name={social.label} />
                    </span>
                  }>
                    <a class="nx-footer__social" href={social.href} aria-label={social.label} title={social.label} target="_blank" rel="noopener noreferrer">
                      <SocialIcon name={social.label} />
                    </a>
                  </Show>
                </li>
              )}</For>
            </ul>
          </div>

          <nav class="nx-footer__nav" aria-labelledby="nx-footer-nav-title">
            <h2 id="nx-footer-nav-title" class="nx-footer__title">Navigasi</h2>
            <ul>
              <For each={PAGES}>{(page) => <li><Link href={page.path}>{page.label}</Link></li>}</For>
            </ul>
          </nav>

          <div class="nx-footer__contact">
            <h2 class="nx-footer__title">Hubungi NatiX</h2>
            <a class="nx-footer__contact-row" href={waLink("Halo, saya ingin berkonsultasi tentang NatiX")} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.5-4.5A9 9 0 1 1 21 11.5z" /><path d="m8 7 2 3-1 1c1 2 2 3 4 4l1-1 3 2" /></svg>
              <span>WhatsApp <strong>{SITE.whatsapp.display}</strong></span>
            </a>
            <p class="nx-footer__contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>{SITE.city}</span>
            </p>
            <Button href={SITE.demoUrl}>
              Masuk ke Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
            </Button>
          </div>
        </div>

        <div class="nx-footer__bottom">
          <div class="nx-footer__copyright">
            <span>© {new Date().getFullYear()} NatiX</span>
            <Show when={SITE.showHfpLabel}><span>Produk HFP System</span></Show>
          </div>
          <button type="button" class="nx-footer__top" onClick={backToTop}>
            Kembali ke atas
            <span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V4m-6 6 6-6 6 6" /></svg></span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
