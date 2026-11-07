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
          <div class="loading-logo"><img src="/assets/svg/logonatix.png" alt="NatiX" style={{ width: "100px", height: "auto", display: "block", margin: "0 auto" }} /></div>
          <div class="loading-spinner">
            <div class="spinner-ring"></div>
          </div>
          <div class="loading-text">Memuat...</div>
        </div>
      </div>
    </Show>
  );
}
