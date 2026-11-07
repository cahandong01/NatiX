import Button from "../components/Button";
import PageHero from "../components/PageHero";
import { DEMO_LINK, PILOT_LINK } from "../site";

export default function Kontak() {
  return (
    <PageHero
      eyebrow="Tentang & Kontak"
      title={<>Mari bicara tentang <span class="nx-accent">lembaga Anda</span></>}
      lead="NatiX dibangun dari Sleman, Yogyakarta. Ceritakan kebutuhan lembaga Anda, lalu kami tunjukkan alurnya."
    >
      <Button href={DEMO_LINK}>Minta Demo</Button>
      <Button href={PILOT_LINK} variant="secondary">Mulai Program Pilot</Button>
    </PageHero>
  );
}
