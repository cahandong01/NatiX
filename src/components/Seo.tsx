import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";
import { findPage, headTags } from "../seo";

/** Menyelaraskan <head> dengan halaman aktif saat berpindah rute. Di build, head sudah terisi lewat prerender. */
export default function Seo() {
  const location = useLocation();

  createEffect(() => {
    const page = findPage(location.pathname);
    document.title = page.title;
    for (const { tag, key, attrs } of headTags(page)) {
      let el = document.head.querySelector(`${tag}[data-seo="${key}"]`);
      if (!el) {
        el = document.createElement(tag);
        el.setAttribute("data-seo", key);
        document.head.appendChild(el);
      }
      for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
    }
  });

  return null;
}
