import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";

export default function Kontak() {
  return (
    <>
      <StickyHeader />
      <main>
      <section aria-labelledby="kontak-title">
        <h1 id="kontak-title">Hubungi Kami</h1>
        <p>Diskusikan kebutuhan pengelolaan yayasan dan lembaga pendidikan bersama NatiX.</p>
      </section>
      </main>
      <Footer />
    </>
  );
}