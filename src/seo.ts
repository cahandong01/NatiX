import { SITE } from "./site";

export interface Page {
  path: string;
  /** Label di navigasi dan peta situs. */
  label: string;
  title: string;
  description: string;
  /** Halaman 404 tidak boleh diindeks. */
  noindex?: boolean;
}

export const PAGES: Page[] = [
  {
    path: "/",
    label: "Beranda",
    title: "NatiX | Satu Sistem, Semua Tertata",
    description:
      "NatiX menghubungkan operasional sekolah dan pesantren dengan data, keputusan pimpinan, dan tindakan pendidik serta keluarga dalam satu ekosistem.",
  },
  {
    path: "/platform",
    label: "Platform",
    title: "Platform NatiX | Dari Catatan Harian ke Keputusan",
    description:
      "Akademik, pesantren, keuangan, SDM, dan operasional lembaga tersambung dalam satu platform, sampai ke meja pimpinan yayasan.",
  },
  {
    path: "/family",
    label: "NatiX Family & Mobile",
    title: "NatiX Family & Mobile | Keluarga Ikut Terhubung",
    description:
      "Aplikasi mobile untuk pimpinan, guru, staf, dan wali agar perkembangan anak dan tindakan yang diperlukan selalu terlihat.",
  },
  {
    path: "/solusi",
    label: "Solusi",
    title: "Solusi NatiX untuk Sekolah, Pesantren, dan Yayasan",
    description:
      "Temukan jalur yang sesuai: sekolah, pesantren dan boarding, atau yayasan dengan banyak lembaga.",
  },
  {
    path: "/layanan",
    label: "Layanan",
    title: "Layanan NatiX | Implementasi, Pelatihan, Pendampingan",
    description:
      "Program pilot, migrasi data, pelatihan, dan pendampingan pengembangan manajemen untuk lembaga pendidikan.",
  },
  {
    path: "/kontak",
    label: "Tentang & Kontak",
    title: "Tentang dan Kontak NatiX | Sleman, Yogyakarta",
    description:
      "Kenali NatiX dan minta demo atau program pilot untuk lembaga Anda.",
  },
];

export const NOT_FOUND: Page = {
  path: "/404",
  label: "Halaman tidak ditemukan",
  title: "Halaman Tidak Ditemukan | NatiX",
  description: "Halaman yang Anda cari tidak ada. Kembali ke beranda NatiX.",
  noindex: true,
};

export const OG_IMAGE = `${SITE.url}/assets/new-og-image.png`;

export const canonicalUrl = (path: string) =>
  `${SITE.url}${path === "/" ? "/" : path}`;

export const findPage = (pathname: string): Page => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return PAGES.find((p) => p.path === clean) ?? NOT_FOUND;
};

export interface HeadTag {
  tag: "meta" | "link";
  /** Kunci unik; dipakai klien untuk memperbarui tag yang sama saat berpindah halaman. */
  key: string;
  attrs: Record<string, string>;
}

export function headTags(page: Page): HeadTag[] {
  const url = canonicalUrl(page.path);
  const tags: HeadTag[] = [
    { tag: "meta", key: "description", attrs: { name: "description", content: page.description } },
    { tag: "meta", key: "robots", attrs: { name: "robots", content: page.noindex ? "noindex" : "index, follow" } },
    { tag: "link", key: "canonical", attrs: { rel: "canonical", href: url } },
    { tag: "meta", key: "og:type", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", key: "og:site_name", attrs: { property: "og:site_name", content: SITE.name } },
    { tag: "meta", key: "og:locale", attrs: { property: "og:locale", content: "id_ID" } },
    { tag: "meta", key: "og:title", attrs: { property: "og:title", content: page.title } },
    { tag: "meta", key: "og:description", attrs: { property: "og:description", content: page.description } },
    { tag: "meta", key: "og:url", attrs: { property: "og:url", content: url } },
    { tag: "meta", key: "og:image", attrs: { property: "og:image", content: OG_IMAGE } },
    { tag: "meta", key: "og:image:alt", attrs: { property: "og:image:alt", content: "Logo NatiX" } },
    { tag: "meta", key: "twitter:card", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", key: "twitter:title", attrs: { name: "twitter:title", content: page.title } },
    { tag: "meta", key: "twitter:description", attrs: { name: "twitter:description", content: page.description } },
    { tag: "meta", key: "twitter:image", attrs: { name: "twitter:image", content: OG_IMAGE } },
  ];
  return tags;
}

/** Data terstruktur: Organization di semua halaman, SoftwareApplication di Beranda dan Platform. */
export function jsonLd(page: Page): object {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/svg/logonatix.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sleman",
      addressRegion: "Daerah Istimewa Yogyakarta",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${SITE.whatsapp.number}`,
      availableLanguage: "id",
    },
  };
  const graph: object[] = [organization];
  if (page.path === "/" || page.path === "/platform") {
    graph.push({
      "@type": "SoftwareApplication",
      name: SITE.name,
      url: SITE.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "id",
      description: PAGES[0].description,
      publisher: { "@id": `${SITE.url}/#organization` },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
