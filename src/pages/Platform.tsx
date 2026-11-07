import Button from "../components/Button";
import PageHero from "../components/PageHero";
import { DEMO_LINK } from "../site";

export default function Platform() {
  return (
    <PageHero
      eyebrow="Platform"
      title={<>Dari catatan harian <span class="nx-accent">sampai keputusan pimpinan</span></>}
      lead="Akademik, pesantren, keuangan, SDM, dan operasional lembaga tersambung dalam satu platform."
    >
      <Button href={DEMO_LINK}>Minta Demo</Button>
    </PageHero>
  );
}
