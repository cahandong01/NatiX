/**
 * Gambar responsif dari keluaran `npm run images`. width/height wajib agar tata letak tidak melompat.
 * `priority` hanya untuk gambar di layar pertama; selainnya dimuat malas.
 */
export default function Picture(props: {
  name: string;
  alt: string;
  width: number;
  height: number;
  widths?: number[];
  sizes?: string;
  priority?: boolean;
  class?: string;
}) {
  const widths = () => props.widths ?? [480, 960, 1600];
  const srcset = (fmt: string) =>
    widths().map((w) => `/assets/opt/${props.name}-${w}.${fmt} ${w}w`).join(", ");
  const sizes = () => props.sizes ?? "100vw";

  return (
    <picture>
      <source type="image/avif" srcset={srcset("avif")} sizes={sizes()} />
      <source type="image/webp" srcset={srcset("webp")} sizes={sizes()} />
      <img
        class={props.class}
        src={`/assets/opt/${props.name}-${widths()[widths().length - 1]}.webp`}
        alt={props.alt}
        width={props.width}
        height={props.height}
        loading={props.priority ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={props.priority ? "high" : undefined}
      />
    </picture>
  );
}
