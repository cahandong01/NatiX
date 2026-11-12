import { For, type JSX } from "solid-js";
import Button from "./Button";
import Picture from "./Picture";
import Reveal from "./Reveal";
import "./FamilyTeaser.css";

const capabilities = [
  { title: "Perjalanan Pendidikan", description: "Perjalanan belajar dan perkembangan anak.", icon: <><path d="m3 7 9-4 9 4-9 4-9-4zM6 9v7c3 3 9 3 12 0V9M21 7v7" /></> },
  { title: "Profil Anak", description: "Profil anak, sekolah, dan program pendidikan.", icon: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" /></> },
  { title: "Wawasan Perkembangan", description: "Ringkasan perkembangan untuk dipahami keluarga.", icon: <><path d="M4 21h16" /><rect x="5" y="12" width="3" height="6" rx="1" /><rect x="11" y="8" width="3" height="10" rx="1" /><rect x="17" y="3" width="3" height="15" rx="1" /></> },
  { title: "Kemitraan Orang Tua", description: "Komunikasi dan kolaborasi dengan guru atau ustadz.", icon: <><path d="M21 11a8 8 0 0 1-8 8H7l-4 3V11a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8zM7 10h10M7 14h6" /></> },
  { title: "Pengasuhan Tepercaya", description: "Informasi pengasuhan, pembinaan, dan perizinan anak.", icon: <><path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7zM8 12l3 3 5-6" /></> },
  { title: "Keuangan Keluarga", description: "Tagihan, pembayaran, dan kewajiban pendidikan keluarga.", icon: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M3 9h18M7 15h4M7 3v2M17 3v2" /></> },
] satisfies { title: string; description: string; icon: JSX.Element }[];

export default function FamilyTeaser() {
  return (
    <section class="nx-family-teaser" aria-labelledby="nx-family-teaser-title">
      <div class="container nx-family-teaser__grid">
        <Reveal>
          <p class="nx-family-teaser__eyebrow">NatiX Family</p>
          <h2 id="nx-family-teaser-title">Terhubung Lebih Dekat dengan <span>Perkembangan Anak</span></h2>
          <p class="nx-family-teaser__lead">
            Dari catatan di lembaga hingga kabar untuk keluarga. Pahami perjalanan pendidikan anak, pengasuhan, dan tindak lanjut bersama pendidik.
          </p>
          <ul class="nx-family-teaser__capabilities" role="list">
            <For each={capabilities}>{(item) => (
              <li>
                <span class="nx-family-teaser__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{item.icon}</svg>
                </span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>
            )}</For>
          </ul>
          <Button href="/family">Jelajahi NatiX Family</Button>
        </Reveal>
        <Reveal delay={120} class="nx-family-teaser__visual">
          <Picture
            name="gbrmoobile1"
            alt="Ilustrasi dua ponsel NatiX Family menampilkan perkembangan anak dan perjalanan pendidikan"
            width={523}
            height={477}
            widths={[480, 523]}
            sizes="(max-width: 563px) calc(100vw - 40px), (max-width: 991px) 523px, 40vw"
            class="nx-family-teaser__image"
          />
        </Reveal>
      </div>
    </section>
  );
}
