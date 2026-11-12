import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/inter/wght.css";
import "./styles/tokens.css";
import "./index.css";
import "./styles/base.css";
import "./styles/components.css";

/* @refresh reload */
import { hydrate, render } from "solid-js/web";
import AppRouter from "./AppRouter";

const root = document.getElementById("root")!;

// Build produksi: HTML sudah dirender per rute, cukup dihidupkan. Mode dev: render biasa.
if (root.children.length > 0) hydrate(() => <AppRouter />, root);
else render(() => <AppRouter />, root);
