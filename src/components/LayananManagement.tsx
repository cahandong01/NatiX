import { For, type JSX } from "solid-js";
import Button from "./Button";
import Reveal from "./Reveal";
import "./LayananManagement.css";

const services: { title: string; description: string; icon: JSX.Element }[] = [
  {
    title: "Kepemimpinan & Tata Kelola",
    description: "Membangun tata kelola lembaga yang profesional.",
    icon: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5" /></>,
  },
  {
    title: "Pengembangan SDM",
    description: "Meningkatkan kompetensi guru dan tenaga kependidikan.",
    icon: <><path d="M4 21h16M3 8l6-4 6 3 6-5M16 2h5v5" /><rect x="5" y="13" width="3" height="5" rx="1" /><rect x="11" y="10" width="3" height="8" rx="1" /><rect x="17" y="8" width="3" height="10" rx="1" /></>,
  },
  {
    title: "Manajemen Keuangan",
    description: "Mengelola keuangan secara transparan.",
    icon: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  },
  {
    title: "Evaluasi & Peningkatan Mutu",
    description: "Mengukur kinerja dan merancang perbaikan.",
    icon: <><path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7zM8 12l3 3 5-6" /></>,
  },
];

export default function LayananManagement() {
  return (
    <section class="nx-layanan-management" aria-labelledby="layanan-management-title">
      <div class="nx-container nx-layanan-management__container">
        <div class="nx-layanan-management__panel">
          <Reveal class="nx-layanan-management__content">
            <p class="nx-layanan-management__eyebrow">Management Development</p>
            <h2 id="layanan-management-title">
              Teknologi membangun sistem. Pendampingan membangun <span>kemampuan.</span>
            </h2>
            <p class="nx-layanan-management__lead">
              Program pengembangan manajemen untuk meningkatkan kapasitas kepemimpinan dan tata kelola lembaga pendidikan.
            </p>
            <Button href="/kontak" variant="secondary">
              Pelajari Lebih Lanjut
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
            </Button>
          </Reveal>
          <Reveal delay={120} class="nx-layanan-management__services">
            <ul role="list">
              <For each={services}>{(service) => (
                <li>
                  <span class="nx-layanan-management__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{service.icon}</svg>
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </li>
              )}</For>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
