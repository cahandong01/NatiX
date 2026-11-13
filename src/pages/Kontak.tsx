import TentangHero from "../components/TentangHero";
import TentangVision from "../components/TentangVision";
import TentangPhilosophy from "../components/TentangPhilosophy";
import TentangConsultation from "../components/TentangConsultation";
import TentangContact from "../components/TentangContact";
import TentangClosing from "../components/TentangClosing";
import "./Kontak.css";

export default function Kontak() {
  return (
    <div class="nx-tentang">
      <TentangHero />
      <TentangVision />
      <TentangPhilosophy />
      <TentangConsultation />
      <TentangContact />
      <TentangClosing />
    </div>
  );
}
