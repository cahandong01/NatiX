import Button from "../components/Button";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={<>Halaman <span class="nx-accent">tidak ditemukan</span></>}
      lead="Alamat yang Anda buka tidak ada atau sudah dipindahkan."
    >
      <Button href="/">Kembali ke Beranda</Button>
    </PageHero>
  );
}
