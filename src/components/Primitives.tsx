import type { JSX } from "solid-js";

export function Container(props: { children: JSX.Element; class?: string }) {
  return <div class={`nx-container ${props.class ?? ""}`}>{props.children}</div>;
}

export function Eyebrow(props: { children: JSX.Element }) {
  return <p class="nx-eyebrow">{props.children}</p>;
}

/** Seksi halaman: satu gagasan per seksi. Maksimal satu seksi `dark` per halaman. */
export function Section(props: {
  children: JSX.Element;
  tone?: "default" | "soft" | "dark";
  labelledBy?: string;
  id?: string;
}) {
  return (
    <section
      id={props.id}
      aria-labelledby={props.labelledBy}
      class={`nx-section nx-section--${props.tone ?? "default"}`}
    >
      <Container>{props.children}</Container>
    </section>
  );
}
