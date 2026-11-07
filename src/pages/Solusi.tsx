import Button from "../components/Button";
import PageHero from "../components/PageHero";
import { DEMO_LINK } from "../site";

export default function Solusi() {
  return (
    <PageHero
      eyebrow="Solusi"
      title={<>Sesuai cara kerja <span class="nx-accent">lembaga Anda</span></>}
      lead="Sekolah, pesantren dan boarding, atau yayasan dengan banyak lembaga: setiap jalur memakai bahasa lapangannya sendiri."
    >
      <Button href={DEMO_LINK}>Minta Demo</Button>
    </PageHero>
  );
}
