import Hero from "../components/Hero";
import ValueChain from "../components/ValueChain";
import ChallengesComparison from "../components/ChallengesComparison";
import SolutionsComparison from "../components/SolutionsComparison";
import ExecutiveIntelligence from "../components/ExecutiveIntelligence";
import FamilyTeaser from "../components/FamilyTeaser";
import Benefits from "../components/Benefits";
import GettingStarted from "../components/GettingStarted";
import HomeClosing from "../components/HomeClosing";
import "../styles/HomePolish.css";

export default function Beranda() {
  return (
    <div class="nx-home">
      <Hero />
      <ValueChain />
      <ChallengesComparison />
      <SolutionsComparison />
      <ExecutiveIntelligence />
      <FamilyTeaser />
      <Benefits />
      <GettingStarted />
      <HomeClosing />
    </div>
  );
}
