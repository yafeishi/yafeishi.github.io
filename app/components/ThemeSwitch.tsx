"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY, resolveTheme, type Theme } from "../theme";

export function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("classic");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(resolveTheme(document.documentElement.dataset.theme));
    setReady(true);

    function syncPreference(event: StorageEvent) {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      const next = resolveTheme(event.newValue);
      document.documentElement.dataset.theme = next;
      setTheme(next);
    }

    window.addEventListener("storage", syncPreference);
    return () => window.removeEventListener("storage", syncPreference);
  }, []);

  function selectTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // The current page still switches when browser storage is unavailable.
    }
  }

  return (
    <div className="theme-switch" role="group" aria-label="主页风格" hidden={!ready}>
      <button type="button" aria-pressed={theme === "classic"} onClick={() => selectTheme("classic")}>
        <span className="theme-swatch theme-swatch-classic" aria-hidden="true" />
        经典黑金
      </button>
      <button type="button" aria-pressed={theme === "glass"} onClick={() => selectTheme("glass")}>
        <span className="theme-swatch theme-swatch-glass" aria-hidden="true" />
        Liquid Glass
      </button>
    </div>
  );
}
