import type { Metadata } from "next";

export type Lang = "zh" | "en";

export type PagePath = "/" | "/about" | "/work" | "/books";

export const SITE_URL = "https://danghb.cn";

export const LANG_STORAGE_KEY = "hobson-site-lang";

export const HTML_LANG: Record<Lang, string> = { zh: "zh-CN", en: "en" };

export function localePath(lang: Lang, path: PagePath): string {
  if (lang === "zh") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

function absoluteUrl(lang: Lang, path: PagePath) {
  const local = localePath(lang, path);
  return `${SITE_URL}${local === "/" ? "/" : `${local}/`}`;
}

export function pageMetadata(
  lang: Lang,
  path: PagePath,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(lang, path),
      languages: {
        "zh-CN": absoluteUrl("zh", path),
        en: absoluteUrl("en", path),
        "x-default": absoluteUrl("zh", path),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(lang, path),
      locale: lang === "zh" ? "zh_CN" : "en_US",
      alternateLocale: lang === "zh" ? "en_US" : "zh_CN",
      type: "website",
    },
  };
}

export const ui = {
  zh: {
    nav: { "/": "首页", "/about": "关于", "/work": "实践", "/books": "书单" } as Record<PagePath, string>,
    navLabel: "主导航",
    skip: "跳到正文",
    themeGroup: "主页风格",
    themeClassic: "经典黑金",
    themeGlass: "Liquid Glass",
    langGroup: "语言",
    langSwitchTo: "Switch to English",
    footerMotto: "夜航 / Night Voyage",
  },
  en: {
    nav: { "/": "Home", "/about": "About", "/work": "Work", "/books": "Books" } as Record<PagePath, string>,
    navLabel: "Main navigation",
    skip: "Skip to content",
    themeGroup: "Site style",
    themeClassic: "Classic",
    themeGlass: "Liquid Glass",
    langGroup: "Language",
    langSwitchTo: "切换到中文",
    footerMotto: "Night Voyage",
  },
} satisfies Record<Lang, unknown>;
