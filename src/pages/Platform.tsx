import PlatformHero from "../components/PlatformHero";
import PlatformExecutive from "../components/PlatformExecutive";
import PlatformInsights from "../components/PlatformInsights";
import PlatformModules from "../components/PlatformModules";
import PlatformMobile from "../components/PlatformMobile";
import PlatformFoundation from "../components/PlatformFoundation";
import PlatformClosing from "../components/PlatformClosing";
import "./Platform.css";

export default function Platform() {
  return (
    <div class="nx-platform">
      <PlatformHero />
      <PlatformModules />
      <PlatformExecutive />
      <PlatformInsights />
      <PlatformMobile />
      <PlatformFoundation />
      <PlatformClosing />
    </div>
  );
}




