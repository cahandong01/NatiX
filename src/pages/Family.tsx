import Button from "../components/Button";
import PageHero from "../components/PageHero";
import { DEMO_LINK } from "../site";

export default function Family() {
  return (
    <PageHero
      eyebrow="NatiX Family & Mobile"
      title={<>Keluarga ikut terhubung dengan <span class="nx-accent">perkembangan anak</span></>}
      lead="Pimpinan, guru, staf, dan wali memakai satu aplikasi dengan data yang sama, sesuai peran dan izin masing-masing."
    >
      <Button href={DEMO_LINK}>Minta Demo</Button>
    </PageHero>
  );
}
