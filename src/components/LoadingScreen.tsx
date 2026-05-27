import { createSignal, onMount, Show } from "solid-js";

export default function LoadingScreen() {
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    // Hide loading screen after content loads
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <Show when={loading()}>
      <div class="loading-screen">
        <div class="loading-content">
          <div class="loading-logo">NatiX</div>
          <div class="loading-spinner">
            <div class="spinner-ring"></div>
          </div>
          <div class="loading-text">Memuat...</div>
        </div>
      </div>
    </Show>
  );
}
