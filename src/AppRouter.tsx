import { Router, type RouteDefinition } from "@solidjs/router";
import type { Component } from "solid-js";
import Layout from "./Layout";
import { PAGES } from "./seo";
import Beranda from "./pages/Beranda";
import Family from "./pages/Family";
import Kontak from "./pages/Kontak";
import Layanan from "./pages/Layanan";
import NotFound from "./pages/NotFound";
import Platform from "./pages/Platform";
import Solusi from "./pages/Solusi";

const COMPONENTS: Record<string, Component> = {
  "/": Beranda,
  "/platform": Platform,
  "/family": Family,
  "/solusi": Solusi,
  "/layanan": Layanan,
  "/kontak": Kontak,
};

const routes: RouteDefinition[] = [
  ...PAGES.map((p) => ({ path: p.path, component: COMPONENTS[p.path] })),
  { path: "*404", component: NotFound },
];

export default function AppRouter(props: { url?: string }) {
  return <Router root={Layout} url={props.url}>{routes}</Router>;
}
