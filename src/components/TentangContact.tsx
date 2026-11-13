import Reveal from "./Reveal";
import { DEMO_LINK, SITE } from "../site";
import "./TentangContact.css";

export default function TentangContact() {
  return (
    <section class="nx-tentang-contact" aria-labelledby="tentang-contact-title">
      <div class="nx-container">
        <Reveal>
          <div class="nx-tentang-contact__grid">
            <div class="nx-tentang-contact__heading">
              <p class="nx-tentang-eyebrow">Hubungi Kami</p>
              <h2 id="tentang-contact-title">Kami Siap Mendengar dan <span>Membantu.</span></h2>
            </div>
            <div class="nx-tentang-contact__item">
              <span class="nx-tentang-contact__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11a9 9 0 0 1-9 9H7l-5 2 2-5a9 9 0 1 1 17-6Z" /><path d="M8 7c0 5 4 9 8 9l1-3-3-1-1 1-3-3 1-1-1-3-2 1Z" /></svg></span>
              <h3><a href={DEMO_LINK} target="_blank" rel="noopener noreferrer">WhatsApp Resmi<span>{SITE.whatsapp.display}</span></a></h3>
              <p>Konsultasi cepat bersama Tim NatiX.</p>
            </div>
            <div class="nx-tentang-contact__item">
              <span class="nx-tentang-contact__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></span>
              <h3><a href="https://www.google.com/maps/search/?api=1&query=Sleman%2C%20Yogyakarta" target="_blank" rel="noopener noreferrer">Lokasi<span>{SITE.city}</span></a></h3>
              <p>Daerah Istimewa Yogyakarta, Indonesia.</p>
            </div>
            <div class="nx-tentang-contact__item">
              <span class="nx-tentang-contact__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg></span>
              <h3><a href="mailto:info@natix.id">Email<span>info@natix.id</span></a></h3>
              <p>Untuk kerja sama, kemitraan, dan informasi lebih lanjut.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
