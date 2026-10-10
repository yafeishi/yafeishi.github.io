import { LANG_STORAGE_KEY, type Lang } from "./i18n";

export type Theme = "classic" | "glass";

export const THEME_STORAGE_KEY = "hobson-site-theme";

export function resolveTheme(value: string | null | undefined): Theme {
  return value === "glass" ? "glass" : "classic";
}

// Run before the page paints so a saved glass preference never flashes black.
const themeInit = `document.documentElement.dataset.theme=localStorage.getItem("${THEME_STORAGE_KEY}")==="glass"?"glass":"classic";`;

// Chinese is the default; only a saved English choice moves a visitor to /en/.
const langRedirect = `var p=location.pathname;if(localStorage.getItem("${LANG_STORAGE_KEY}")==="en"&&p!=="/en"&&p.indexOf("/en/")!==0){location.replace("/en"+p+location.search+location.hash);}`;

export function headInitScript(lang: Lang) {
  return `(function(){try{${themeInit}${lang === "zh" ? langRedirect : ""}}catch(e){}})();`;
}
