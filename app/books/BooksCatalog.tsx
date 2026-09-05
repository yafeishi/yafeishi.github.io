"use client";

import { useMemo, useState } from "react";
import { BOOK_CATS, books, booksByCategory } from "./data";

export function BooksCatalog() {
  const [cat, setCat] = useState("全部");
  const groups = useMemo(
    () => booksByCategory(cat === "全部" ? undefined : cat),
    [cat],
  );
  const count =
    cat === "全部" ? books.length : groups[0]?.items.length ?? 0;

  return (
    <>
      <div className="book-filters" role="tablist" aria-label="书单分类">
        {["全部", ...BOOK_CATS].map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={cat === name}
            className={cat === name ? "book-filter active" : "book-filter"}
            onClick={() => setCat(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="book-count">{count} 本</p>
      {groups.map((group) => (
        <section className="book-group" key={group.cat}>
          <h2>{group.cat}</h2>
          <div>
            {group.items.map((book) => (
              <article className="book-row" key={`${book.cat}-${book.title}`}>
                <div>
                  <h3>
                    <a
                      href={book.douban}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {book.title}
                    </a>
                  </h3>
                  <p className="book-row-author">
                    {book.author}
                    <a
                      className="book-douban"
                      href={book.douban}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      豆瓣
                    </a>
                  </p>
                  <p className="book-row-note">{book.note}</p>
                </div>
                <p className="book-row-meta">
                  {book.status}
                  {book.date ? <span>{book.date}</span> : null}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
