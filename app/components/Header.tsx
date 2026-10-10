import Link from "next/link";
import { localePath, ui, type Lang, type PagePath } from "../i18n";
import { LangSwitch } from "./LangSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

const paths: PagePath[] = ["/", "/about", "/work", "/books"];

export function Header({ lang, current }: { lang: Lang; current: PagePath }) {
  const t = ui[lang];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href={localePath(lang, "/")} className="mark">
          <span className="mark-seal">H</span>
          <span className="mark-en">Hobson</span>
        </Link>
        <div className="header-actions">
          <nav className="nav" aria-label={t.navLabel}>
            {paths.map((path) => (
              <Link
                key={path}
                href={localePath(lang, path)}
                className={current === path ? "active" : undefined}
                aria-current={current === path ? "page" : undefined}
              >
                {t.nav[path]}
              </Link>
            ))}
          </nav>
          <div className="header-controls">
            <ThemeSwitch lang={lang} />
            <LangSwitch lang={lang} current={current} />
          </div>
        </div>
      </div>
    </header>
  );
}
