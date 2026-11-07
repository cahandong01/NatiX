import type { RouteSectionProps } from "@solidjs/router";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Seo from "./components/Seo";

/** Kerangka bersama semua halaman. Dipasang sekali di akar router. */
export default function Layout(props: RouteSectionProps) {
  return (
    <>
      <a class="nx-skip" href="#main">Lewati ke konten</a>
      <Seo />
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <main id="main" tabindex="-1">{props.children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
