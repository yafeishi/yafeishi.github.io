import { BooksCatalog } from "../components/BooksCatalog";
import { books } from "../content/books";
import { Header } from "../components/Header";
import type { Lang } from "../i18n";

const intro = {
  zh: {
    title: "书单",
    lede: `从笔记库里列出来的 ${books.length} 本。推荐语是读书笔记的摘要，书名和「豆瓣」链到豆瓣条目。`,
  },
  en: {
    title: "Reading list",
    lede: `${books.length} books from my notes. Each blurb sums up what I took away; titles link to Douban, China's main book site, with the original Chinese title alongside.`,
  },
};

export function BooksView({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} current="/books" />
      <main id="main" className="shell">
        <section className="page-intro">
          <p className="kicker">Reading List</p>
          <h1>{intro[lang].title}</h1>
          <p className="lede">{intro[lang].lede}</p>
        </section>
        <section className="section">
          <BooksCatalog lang={lang} />
        </section>
      </main>
    </>
  );
}
