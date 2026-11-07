import { createSignal, onMount, Show } from "solid-js";

const SEEN_KEY = "nx-intro";
const MIN_VISIBLE_MS = 500;
const LEAVE_MS = 400;

/**
 * Layar pembuka berlogo NatiX. Hanya tampil pada kunjungan pertama dalam satu sesi,
 * hilang begitu halaman siap (minimal 0,5 detik agar tidak berkedip). Isi halaman sudah
 * ada di HTML di bawahnya, jadi tidak pernah ada halaman kosong. Skrip kecil di
 * index.html menyembunyikannya sejak awal untuk kunjungan berikutnya.
 */
export default function LoadingScreen() {
  const [phase, setPhase] = createSignal<"show" | "leave" | "gone">("show");

  onMount(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return setPhase("gone");
    } catch {
      /* penyimpanan diblokir: tampilkan seperti biasa */
    }
    const startedAt = performance.now();
    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt));
      setTimeout(() => {
        setPhase("leave");
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* abaikan */
        }
        setTimeout(() => setPhase("gone"), LEAVE_MS);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
  });

  return (
    <Show when={phase() !== "gone"}>
      <div class="nx-intro" classList={{ "nx-intro--leave": phase() === "leave" }} aria-hidden="true">
        <img src="/assets/logo-natix.webp" alt="" width="196" height="53" />
      </div>
    </Show>
  );
}
