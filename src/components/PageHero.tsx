import type { JSX } from "solid-js";
import { Container, Eyebrow } from "./Primitives";

/** Pembuka halaman: eyebrow, satu h1, satu kalimat pembuka, lalu ajakan. */
export default function PageHero(props: {
  eyebrow: string;
  title: JSX.Element;
  lead: string;
  children?: JSX.Element;
}) {
  return (
    <header class="nx-page-hero">
      <Container>
        <Eyebrow>{props.eyebrow}</Eyebrow>
        <h1 class="nx-display">{props.title}</h1>
        <p class="nx-lead">{props.lead}</p>
        {props.children && <div class="nx-actions">{props.children}</div>}
      </Container>
    </header>
  );
}
