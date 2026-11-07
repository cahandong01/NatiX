import { useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, on, onCleanup, onMount } from "solid-js";
import { PAGES } from "../seo";
import { DEMO_LINK } from "../site";
import Button from "./Button";
import Link from "./Link";

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = createSignal(false);
  const [open, setOpen] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    onCleanup(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    });
  });

  createEffect(on(() => location.pathname, () => setOpen(false), { defer: true }));
  createEffect(() => document.documentElement.classList.toggle("nx-no-scroll", open()));

  return (
    <header class="nx-header" classList={{ "nx-header--scrolled": scrolled() }}>
      <div class="nx-container nx-header__bar">
        <Link href="/" class="nx-header__logo">
          <img src="/assets/logo-natix.webp" alt="NatiX" width="148" height="40" fetchpriority="high" />
        </Link>

        <nav class="nx-nav" aria-label="Navigasi utama">
          <For each={PAGES}>{(p) => <Link href={p.path} class="nx-nav__link">{p.label}</Link>}</For>
        </nav>

        <div class="nx-header__cta">
          <Button href={DEMO_LINK}>Minta Demo</Button>
        </div>

        <button
          type="button"
          class="nx-burger"
          aria-label={open() ? "Tutup menu" : "Buka menu"}
          aria-expanded={open()}
          aria-controls="nx-menu"
          onClick={() => setOpen(!open())}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="nx-menu" class="nx-menu" classList={{ "nx-menu--open": open() }} aria-hidden={!open()}>
        <nav class="nx-menu__nav" aria-label="Navigasi seluler">
          <For each={PAGES}>
            {(p) => (
              <Link href={p.path} class="nx-menu__link">
                {p.label}
              </Link>
            )}
          </For>
          <Button href={DEMO_LINK}>Minta Demo</Button>
        </nav>
      </div>
    </header>
  );
}
