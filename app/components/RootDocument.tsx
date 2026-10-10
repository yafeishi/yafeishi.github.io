import type { Metadata, Viewport } from "next";
import { HTML_LANG, SITE_URL, ui, type Lang } from "../i18n";
import { headInitScript } from "../theme";
import { Footer } from "./Footer";
import "../globals.css";
import "../themes.css";

export const rootMetadata: Metadata = { metadataBase: new URL(SITE_URL) };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[lang]} data-theme="classic" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: headInitScript(lang) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {ui[lang].skip}
        </a>
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
