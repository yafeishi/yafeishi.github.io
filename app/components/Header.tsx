import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";

const links = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/work", label: "实践" },
  { href: "/books", label: "书单" },
];

export function Header({ current }: { current: string }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="mark">
          <span className="mark-seal">H</span>
          <span className="mark-en">Hobson</span>
        </Link>
        <div className="header-actions">
          <nav className="nav" aria-label="主导航">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={current === link.href ? "active" : undefined}
                aria-current={current === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
