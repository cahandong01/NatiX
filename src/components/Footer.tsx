import { For, Show } from "solid-js";
import { PAGES } from "../seo";
import { SITE, waLink } from "../site";
import { Container } from "./Primitives";
import Link from "./Link";
import SocialIcon from "./SocialIcon";
import "./Footer.css";

const productPages = PAGES.filter(page => ["/platform", "/family", "/solusi"].includes(page.path));
const companyPages = PAGES.filter(page => ["/", "/layanan", "/kontak"].includes(page.path));

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
              <img src="/assets/logo-natix.webp" alt="NatiX — Satu Sistem, Semua Tertata" width="196" height="53" loading="lazy" decoding="async" />
            </Link>
            <p class="nx-footer__description">Platform ERP Enterprise terintegrasi untuk pengelolaan sekolah, pesantren, dan lembaga pendidikan lainnya.</p>
            <ul class="nx-footer__socials" aria-label="Media sosial NatiX">
              <For each={SITE.socials}>{social => (
                <li>
                  <Show when={social.href.trim()} fallback={
                    <span class="nx-footer__social-placeholder" role="img" aria-label={`${social.label} — tautan belum tersedia`} title={social.label}><SocialIcon name={social.label} /></span>
                  }>
                    <a href={social.href} aria-label={social.label} title={social.label} target="_blank" rel="noopener noreferrer"><SocialIcon name={social.label} /></a>
                  </Show>
                </li>
              )}</For>
            </ul>
          </div>
          <nav class="nx-footer__nav" aria-labelledby="nx-footer-product-title">
            <h2 id="nx-footer-product-title" class="nx-footer__title">Produk</h2>
            <ul><For each={productPages}>{page => <li><Link href={page.path}>{page.label}</Link></li>}</For></ul>
          </nav>
          <nav class="nx-footer__nav" aria-labelledby="nx-footer-company-title">
            <h2 id="nx-footer-company-title" class="nx-footer__title">Perusahaan</h2>
            <ul><For each={companyPages}>{page => <li><Link href={page.path}>{page.label}</Link></li>}</For></ul>
          </nav>
          <div class="nx-footer__contact">
            <h2 class="nx-footer__title">Hubungi NatiX</h2>
            <a class="nx-footer__whatsapp" href={waLink("Halo, saya ingin berkonsultasi tentang NatiX")} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp NatiX ${SITE.whatsapp.display}`}>
              <span class="nx-footer__label">WhatsApp</span>
              <span class="nx-footer__number">{SITE.whatsapp.display}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg></span>
            </a>
            <p class="nx-footer__location">{SITE.city}</p>
            <a class="nx-footer__demo" href={SITE.demoUrl} target="_blank" rel="noopener noreferrer">Masuk ke Demo<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></a>
          </div>
        </div>
        <div class="nx-footer__bottom">
          <div class="nx-footer__copyright"><span>© {new Date().getFullYear()} NatiX</span></div>
          <Show when={SITE.showHfpLabel}>
            <div class="nx-footer__hfp">
              <img src="/assets/hfp-system-footer.webp" alt="HFP System" width="260" height="42" loading="lazy" decoding="async" />
            </div>
          </Show>
          <button type="button" class="nx-footer__top" onClick={backToTop}><span class="nx-footer__top-label">Kembali ke atas</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20V4m-6 6 6-6 6 6" /></svg></button>
        </div>
      </Container>
    </footer>
  );
}

