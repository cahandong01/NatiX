/** Konfigurasi situs: satu tempat untuk kontak, tautan sosial, dan navigasi. */
export const SITE = {
  name: "NatiX",
  url: "https://natix.id",
  tagline: "Satu Sistem, Semua Tertata",
  city: "Sleman, Yogyakarta",
  whatsapp: { number: "6285815227572", display: "0858 1522 7572" },
  demoUrl: "https://demo.natix.id",
  /** Tampilkan logo HFP System pada baris bawah footer. */
  showHfpLabel: true,
  /** Isi href dengan URL akun resmi. URL kosong tampil sebagai ikon nonaktif. */
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
    { label: "TikTok", href: "" },
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const DEMO_LINK = waLink("Halo, saya ingin meminta demo NatiX");
export const PILOT_LINK = waLink("Halo, saya ingin memulai program pilot NatiX");
