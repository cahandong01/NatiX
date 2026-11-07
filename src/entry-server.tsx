import { renderToString } from "solid-js/web";
import AppRouter from "./AppRouter";

export { PAGES, NOT_FOUND, findPage, headTags, jsonLd } from "./seo";

export const render = (url: string) => renderToString(() => <AppRouter url={url} />);
