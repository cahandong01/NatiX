import { For, type JSX } from "solid-js";
import Reveal from "./Reveal";
import { waLink } from "../site";
import "./TentangConsultation.css";

const benefits = ["Diskusi awal kebutuhan lembaga", "Demo solusi sesuai kebutuhan", "Rekomendasi implementasi bertahap"];

export default function TentangConsultation() {
  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const message = [
      "Halo Tim NatiX, saya ingin mengajukan konsultasi.",
      "",
      `Nama: ${value("name")}`,
      `Nomor WhatsApp: ${value("phone")}`,
      `Lembaga / Yayasan: ${value("institution")}`,
      `Jenis lembaga: ${value("type")}`,
      "",
      "Kebutuhan lembaga:",
      value("message"),
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section class="nx-tentang-consultation" aria-labelledby="tentang-consultation-title">
      <div class="nx-container">
        <div class="nx-tentang-consultation__panel">
          <Reveal class="nx-tentang-consultation__content">
            <p class="nx-tentang-eyebrow">Konsultasi & Demo</p>
            <h2 id="tentang-consultation-title">Diskusikan Kebutuhan Lembaga Anda <span>bersama Tim NatiX.</span></h2>
            <p class="nx-tentang-consultation__lead">Dapatkan gambaran solusi, alur implementasi, serta rekomendasi yang sesuai dengan kebutuhan lembaga Anda.</p>
            <ul class="nx-tentang-consultation__benefits" role="list">
              <For each={benefits}>{(benefit) => (
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
                  <span>{benefit}</span>
                </li>
              )}</For>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <form class="nx-tentang-consultation__form" onSubmit={handleSubmit} aria-labelledby="tentang-form-title" aria-describedby="tentang-form-note">
              <h3 id="tentang-form-title">Ajukan Konsultasi</h3>
              <p class="nx-tentang-consultation__intro">Ceritakan kebutuhan lembaga Anda untuk memulai diskusi dengan Tim NatiX.</p>
              <div class="nx-tentang-consultation__fields">
                <div class="nx-tentang-consultation__field">
                  <label for="tentang-name">Nama lengkap</label>
                  <input id="tentang-name" name="name" type="text" autocomplete="name" placeholder="Nama Anda" required maxlength={100} />
                </div>
                <div class="nx-tentang-consultation__field">
                  <label for="tentang-phone">Nomor WhatsApp</label>
                  <input id="tentang-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="08…" required minlength={8} maxlength={24} />
                </div>
                <div class="nx-tentang-consultation__field nx-tentang-consultation__field--wide">
                  <label for="tentang-institution">Nama lembaga / yayasan</label>
                  <input id="tentang-institution" name="institution" type="text" autocomplete="organization" placeholder="Nama lembaga Anda" required maxlength={150} />
                </div>
                <div class="nx-tentang-consultation__field nx-tentang-consultation__field--wide">
                  <label for="tentang-type">Jenis lembaga</label>
                  <select id="tentang-type" name="type" required>
                    <option value="" disabled selected>Pilih jenis lembaga</option>
                    <option>Sekolah / Madrasah</option>
                    <option>Pesantren / Boarding</option>
                    <option>Yayasan Multi-Lembaga</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div class="nx-tentang-consultation__field nx-tentang-consultation__field--wide">
                  <label for="tentang-message">Kebutuhan lembaga</label>
                  <textarea id="tentang-message" name="message" rows={3} placeholder="Ceritakan kebutuhan Anda…" required maxlength={1200} />
                </div>
              </div>
              <button class="nx-btn nx-btn--primary" type="submit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4L22 2ZM11 13 22 2" /></svg>
                Lanjutkan ke WhatsApp
              </button>
              <p id="tentang-form-note" class="nx-tentang-consultation__note">Pesan dibuka di WhatsApp untuk Anda periksa dan kirim.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
