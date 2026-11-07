import { For, Show } from "solid-js";
import { PAGES } from "../seo";
import { SITE, waLink } from "../site";
import { Container } from "./Primitives";
import Link from "./Link";

export default function Footer() {
  const socials = SITE.socials.filter((s) => s.href);

  return (
    <footer class="nx-footer">
      <Container>
        <div class="nx-footer__grid">
          <div class="nx-footer__brand">
            <img src="/assets/logo-natix.webp" alt="NatiX" width="148" height="40" loading="lazy" />
            <p class="nx-footer__tagline">{SITE.tagline}</p>
            <p class="nx-footer__muted">{SITE.city}</p>
          </div>

          <nav aria-label="Peta situs">
            <h2 class="nx-footer__title">Situs</h2>
            <ul>
              <For each={PAGES}>{(p) => <li><Link href={p.path}>{p.label}</Link></li>}</For>
            </ul>
          </nav>

          <div>
            <h2 class="nx-footer__title">Hubungi</h2>
            <ul>
              <li>
                <a href={waLink("Halo, saya ingin berkonsultasi tentang NatiX")} target="_blank" rel="noopener noreferrer">
                  WhatsApp {SITE.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={SITE.demoUrl} target="_blank" rel="noopener noreferrer">Masuk ke demo</a>
              </li>
            </ul>
          </div>

          <Show when={socials.length}>
            <div>
              <h2 class="nx-footer__title">Ikuti</h2>
              <ul>
                <For each={socials}>
                  {(s) => (
                    <li>
                      <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </Show>
        </div>

        <div class="nx-footer__bottom">
          <span>© {new Date().getFullYear()} NatiX</span>
          <Show when={SITE.showHfpLabel}>
            <span>Produk HFP System</span>
          </Show>
        </div>
      </Container>
    </footer>
  );
}
