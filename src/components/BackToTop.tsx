import { createSignal, onMount, onCleanup } from "solid-js";

export default function BackToTop() {
  const [visible, setVisible] = createSignal(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = scrollTop / docHeight;

    setVisible(scrollPercent > 0.3);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <a
      href="https://wa.me/6285815227572"
      target="_blank"
      rel="noopener noreferrer"
      class={`back-to-top ${visible() ? "visible" : ""}`}
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="white"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.8 11.8 0 0 0 5.7 1.45h.01c6.54 0 11.88-5.34 11.88-11.88 0-3.17-1.23-6.14-3.41-8.43ZM12.05 21.7h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.77 9.77 0 0 1-1.5-5.18c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.78 9.78 0 0 1 2.89 6.97c0 5.43-4.43 9.85-9.85 9.85Zm5.4-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.68.62.7.22 1.33.2 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}