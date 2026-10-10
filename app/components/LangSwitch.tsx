"use client";

import { LANG_STORAGE_KEY, localePath, ui, type Lang, type PagePath } from "../i18n";

export function LangSwitch({ lang, current }: { lang: Lang; current: PagePath }) {
  const target: Lang = lang === "zh" ? "en" : "zh";
  const href = `${localePath(target, current)}/`.replace("//", "/");

  function remember() {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, target);
    } catch {
      // Switching still works for this visit when storage is unavailable.
    }
  }

  return (
    <a
      className="lang-switch"
      href={href}
      hrefLang={target === "zh" ? "zh-CN" : "en"}
      aria-label={ui[lang].langSwitchTo}
      title={ui[lang].langSwitchTo}
      onClick={remember}
    >
      <svg className="lang-globe" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </svg>
      <span className={lang === "zh" ? "lang-opt is-current" : "lang-opt"} lang="zh-CN">
        中文
      </span>
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      <span className={lang === "en" ? "lang-opt is-current" : "lang-opt"} lang="en">
        EN
      </span>
    </a>
  );
}
