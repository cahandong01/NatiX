import type { JSX } from "solid-js";
import Link from "./Link";

export default function Button(props: {
  href: string;
  variant?: "primary" | "secondary";
  children: JSX.Element;
}) {
  const cls = () => `nx-btn nx-btn--${props.variant ?? "primary"}`;
  const external = () => /^https?:\/\//.test(props.href);

  return external() ? (
    <a class={cls()} href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link class={cls()} href={props.href}>
      {props.children}
    </Link>
  );
}
