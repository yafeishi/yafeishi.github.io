import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/work", label: "作品" },
];

export function Header({ current }: { current: string }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="mark">
          <span className="mark-seal">H</span>
          <span className="mark-en">Hobson</span>
        </Link>
        <nav className="nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={current === link.href ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
