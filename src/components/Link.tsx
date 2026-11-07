import { useLocation, useNavigate } from "@solidjs/router";
import type { JSX } from "solid-js";

export const normalizePath = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

/** Tautan internal: berupa <a href> asli (bisa diikuti mesin pencari), perpindahan halus lewat View Transitions bila didukung. */
export default function Link(props: {
  href: string;
  class?: string;
  children: JSX.Element;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = () => normalizePath(location.pathname) === props.href;

  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (active()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const go = () => navigate(props.href);
    const doc = document as ViewTransitionDocument;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduce) doc.startViewTransition(go);
    else go();
  };

  return (
    <a
      href={props.href}
      class={props.class}
      aria-current={active() ? "page" : undefined}
      onClick={onClick}
    >
      {props.children}
    </a>
  );
}
