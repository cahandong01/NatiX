import { createSignal, onMount, onCleanup } from "solid-js";

export default function ScrollProgress() {
  const [progress, setProgress] = createSignal(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(scrollPercent);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" style={{ width: `${progress()}%` }}></div>
    </div>
  );
}
