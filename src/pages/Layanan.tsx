import LayananHero from "../components/LayananHero";
import LayananManagement from "../components/LayananManagement";
import LayananImplementation from "../components/LayananImplementation";
import LayananPilot from "../components/LayananPilot";
import LayananSupport from "../components/LayananSupport";
import LayananClosing from "../components/LayananClosing";
import "./Layanan.css";

export default function Layanan() {
  return (
    <div class="nx-layanan">
      <LayananHero />
      <LayananManagement />
      <LayananImplementation />
      <LayananPilot />
      <LayananSupport />
      <LayananClosing />
    </div>
  );
}



