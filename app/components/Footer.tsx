export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} Hobson · 党宏博</p>
        <p>
          <a href="https://github.com/yafeishi" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" / "}
          <a href="mailto:yafeishiorcl@gmail.com">Mail</a>
        </p>
      </div>
    </footer>
  );
}
