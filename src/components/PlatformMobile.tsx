import { For } from "solid-js";
import Button from "./Button";
import Picture from "./Picture";
import Reveal from "./Reveal";
import "./PlatformMobile.css";

const benefits = [
  { title: "Perkembangan anak", description: "Belajar, kehadiran, dan pengasuhan dalam satu pandangan.", path: "M15 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM6 21v-3a6 6 0 0 1 12 0v3M4 5a3 3 0 0 0 0 6M20 5a3 3 0 0 1 0 6" },
  { title: "Informasi penting", description: "Kabar dan notifikasi untuk tindak lanjut bersama.", path: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4M12 2V1" },
  { title: "Akses sesuai peran", description: "Setiap peran melihat informasi yang menjadi haknya.", path: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6" },
];

export default function PlatformMobile() {
  return (
    <section class="nx-platform-mobile" aria-labelledby="platform-mobile-title">
      <div class="nx-container nx-platform-mobile__grid">
        <Reveal class="nx-platform-mobile__visual">
          <Picture
            name="gbrmoobile1"
            alt="Dua ponsel NatiX Family menampilkan perkembangan anak dan perjalanan pendidikan."
            width={523}
            height={477}
            widths={[480, 523]}
            sizes="(max-width: 563px) calc(100vw - 40px), (max-width: 991px) 523px, (max-width: 1280px) 43vw, 523px"
            class="nx-platform-mobile__image"
          />
        </Reveal>
        <Reveal delay={120} class="nx-platform-mobile__content">
          <p class="nx-platform-mobile__eyebrow">NATIX FAMILY &amp; MOBILE</p>
          <h2 id="platform-mobile-title">Terhubung dengan keluarga, <span>memperkuat ekosistem pendidikan</span></h2>
          <p class="nx-platform-mobile__lead">
            Catatan kehadiran, hasil belajar, pembinaan, dan tagihan di lembaga terhubung ke NatiX Family.
            Wali memantau perkembangan dan kewajiban anak melalui ponsel, sesuai hak aksesnya.
          </p>
          <ul class="nx-platform-mobile__benefits" role="list">
            <For each={benefits}>{(benefit) => (
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={benefit.path} /></svg>
                <div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
              </li>
            )}</For>
          </ul>
          <Button href="/family">Jelajahi NatiX Family &amp; Mobile</Button>
        </Reveal>
      </div>
    </section>
  );
}

