import { ui, type Lang } from "../i18n";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} Hobson</p>
        <p>{ui[lang].footerMotto}</p>
      </div>
    </footer>
  );
}
