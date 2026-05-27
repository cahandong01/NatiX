import { onMount, onCleanup, children, type JSX } from "solid-js";

interface RevealProps {
  children: JSX.Element;
  threshold?: number;
  delay?: number;
  class?: string;
}

export default function Reveal(props: RevealProps) {
  let el: HTMLDivElement | undefined;
  const resolved = children(() => props.children);

  onMount(() => {
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el?.classList.add("reveal-visible");
            }, props.delay || 0); // Optional delay
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: props.threshold || 0.1,
        rootMargin: "0px 0px -150px 0px", // Trigger further into view for better visibility
      }
    );

    observer.observe(el);

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <div ref={el} class={`reveal-hidden ${props.class || ""}`}>
      {resolved()}
    </div>
  );
}
