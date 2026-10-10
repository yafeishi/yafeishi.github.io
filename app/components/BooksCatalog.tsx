"use client";

import { useMemo, useState } from "react";
import type { Lang } from "../i18n";
import { BOOK_CAT_EN, BOOK_CATS, BOOK_STATUS_EN, books, booksByCategory } from "../content/books";

const ALL = "全部";

const labels = {
  zh: { all: "全部", filters: "书单分类", count: (n: number) => `${n} 本`, douban: "豆瓣" },
  en: { all: "All", filters: "Reading list categories", count: (n: number) => `${n} ${n === 1 ? "book" : "books"}`, douban: "Douban" },
};

export function BooksCatalog({ lang }: { lang: Lang }) {
  const t = labels[lang];
  const [cat, setCat] = useState(ALL);
  const groups = useMemo(() => booksByCategory(cat === ALL ? undefined : cat), [cat]);
  const count = cat === ALL ? books.length : groups[0]?.items.length ?? 0;
  const catLabel = (name: string) =>
    name === ALL ? t.all : lang === "en" ? BOOK_CAT_EN[name as keyof typeof BOOK_CAT_EN] : name;

  return (
    <>
      <div className="book-filters" role="tablist" aria-label={t.filters}>
        {[ALL, ...BOOK_CATS].map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={cat === name}
            className={cat === name ? "book-filter active" : "book-filter"}
            onClick={() => setCat(name)}
          >
            {catLabel(name)}
          </button>
        ))}
      </div>
      <p className="book-count">{t.count(count)}</p>
      {groups.map((group) => (
        <section className="book-group" key={group.cat}>
          <h2>{catLabel(group.cat)}</h2>
          <div>
            {group.items.map((book) => {
              const text = lang === "en" ? book.en : book;
              return (
                <article className="book-row" key={`${book.cat}-${book.title}`}>
                  <div>
                    <h3>
                      <a href={book.douban} target="_blank" rel="noopener noreferrer">
                        {text.title}
                      </a>
                      {lang === "en" ? (
                        <span className="book-original" lang="zh-CN">
                          {book.title}
                        </span>
                      ) : null}
                    </h3>
                    <p className="book-row-author">
                      {text.author}
                      <a className="book-douban" href={book.douban} target="_blank" rel="noopener noreferrer">
                        {t.douban}
                      </a>
                    </p>
                    <p className="book-row-note">{text.note}</p>
                  </div>
                  <p className="book-row-meta">
                    {lang === "en" ? BOOK_STATUS_EN[book.status] : book.status}
                    {book.date ? <span>{book.date}</span> : null}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}
