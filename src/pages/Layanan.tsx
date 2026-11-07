import Button from "../components/Button";
import PageHero from "../components/PageHero";
import { PILOT_LINK } from "../site";

export default function Layanan() {
  return (
    <PageHero
      eyebrow="Layanan"
      title={<>Pendampingan sampai lembaga <span class="nx-accent">siap berjalan</span></>}
      lead="Program pilot, migrasi data, pelatihan, dan pendampingan manajemen berjalan bersama platform."
    >
      <Button href={PILOT_LINK}>Mulai Program Pilot</Button>
    </PageHero>
  );
}
