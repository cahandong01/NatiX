/** Konfigurasi situs: satu tempat untuk kontak, tautan sosial, dan navigasi. */
export const SITE = {
  name: "NatiX",
  url: "https://natix.id",
  tagline: "Satu Sistem, Semua Tertata",
  city: "Sleman, Yogyakarta",
  whatsapp: { number: "6285815227572", display: "0858 1522 7572" },
  demoUrl: "https://demo.natix.id",
  /** Aktifkan setelah domain HFP System siap: menampilkan label "produk HFP System" di footer. */
  showHfpLabel: false,
  /** Tautan kosong tidak ditampilkan. Isi setelah akun benar-benar aktif. */
  socials: [
    { label: "YouTube", href: "" },
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
    { label: "X", href: "" },
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const DEMO_LINK = waLink("Halo, saya ingin meminta demo NatiX");
export const PILOT_LINK = waLink("Halo, saya ingin memulai program pilot NatiX");
