export type Theme = "classic" | "glass";

export const THEME_STORAGE_KEY = "hobson-site-theme";

export function resolveTheme(value: string | null | undefined): Theme {
  return value === "glass" ? "glass" : "classic";
}

// Run before the page paints so a saved glass preference never flashes black.
export const themeInitScript = `(function(){try{document.documentElement.dataset.theme=localStorage.getItem("${THEME_STORAGE_KEY}")==="glass"?"glass":"classic";}catch(e){}})();`;
