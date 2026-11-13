import { For, type JSX } from "solid-js";
import Reveal from "./Reveal";
import "./LayananSupport.css";

const services: { title: string; icon: JSX.Element }[] = [
  {
    title: "Layanan Konsultasi & Support Profesional",
    icon: <><path d="M4 14v-3a8 8 0 0 1 16 0v3M20 17v1a3 3 0 0 1-3 3h-3" /><rect x="2" y="11" width="4" height="7" rx="2" /><rect x="18" y="11" width="4" height="7" rx="2" /></>,
  },
  {
    title: "Pengembangan Fitur Sesuai Kebutuhan",
    icon: <><path d="m2 8 4-4 5 2M22 8l-4-4-5 1-5 5 3 2 4-3 6 6-5 5-8-3-6-6M6 4l-4 7M18 4l4 7M12 15l4 4M9 17l3 3" /></>,
  },
  {
    title: "Pembaruan Sistem & Keamanan Data",
    icon: <><path d="M7 18H6a4 4 0 0 1-1-8 7 7 0 0 1 14-1 4.5 4.5 0 0 1 0 9h-2M12 21V11m-4 4 4-4 4 4" /></>,
  },
  {
    title: "Strategi Transformasi Digital Pendidikan",
    icon: <><path d="M4 21h16M3 8l6-4 6 3 6-5M16 2h5v5" /><rect x="5" y="13" width="3" height="5" rx="1" /><rect x="11" y="10" width="3" height="8" rx="1" /><rect x="17" y="8" width="3" height="10" rx="1" /></>,
  },
];

export default function LayananSupport() {
  return (
    <section class="nx-layanan-support" aria-labelledby="layanan-support-title">
      <div class="nx-container">
        <Reveal>
          <header class="nx-layanan-support__heading">
            <p class="nx-layanan-support__eyebrow">Pendampingan Berkelanjutan</p>
            <h2 id="layanan-support-title">Bersama NatiX, melangkah <span>lebih jauh</span></h2>
            <p>Dukungan profesional dan layanan konsultasi untuk membantu lembaga Anda terus berkembang di era digital.</p>
          </header>
        </Reveal>
        <ul class="nx-layanan-support__services" role="list">
          <For each={services}>{(service, index) => (
            <li>
              <Reveal delay={index() * 90}>
                <div class="nx-layanan-support__service">
                  <span class="nx-layanan-support__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{service.icon}</svg>
                  </span>
                  <h3>{service.title}</h3>
                </div>
              </Reveal>
            </li>
          )}</For>
        </ul>
      </div>
    </section>
  );
}
