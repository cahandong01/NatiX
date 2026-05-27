import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import UseCases from "./components/UseCases";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import StickyHeader from "./components/StickyHeader";

function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <StickyHeader />
      <main>
        <Hero />
        <Challenges />
        <UseCases />
        <Benefits />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
