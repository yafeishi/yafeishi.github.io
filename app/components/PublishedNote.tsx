// content-publisher:published-note
import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "./Header";

export type PublishedInline =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "em"; text: string }
  | { type: "code"; text: string }
  | { type: "link"; text: string; href: string };

export type PublishedBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; inlines: PublishedInline[] }
  | { type: "li"; inlines: PublishedInline[] }
  | { type: "quote"; inlines: PublishedInline[] }
  | { type: "code"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

export type PublishedNoteData = {
  title: string;
  description: string;
  canonical: string;
  date: string;
  kicker: string;
  lede: string;
  credit: string;
  blocks: PublishedBlock[];
};

function InlineText({ inlines }: { inlines: PublishedInline[] }) {
  return (
    <>
      {inlines.map((item, index) => {
        if (item.type === "strong") return <strong key={index}>{item.text}</strong>;
        if (item.type === "em") return <em key={index}>{item.text}</em>;
        if (item.type === "code") return <code key={index}>{item.text}</code>;
        if (item.type === "link") {
          const external = /^https?:\/\//i.test(item.href);
          return (
            <a key={index} href={item.href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {item.text}
            </a>
          );
        }
        const lines = item.text.split("\n");
        return (
          <span key={index}>
            {lines.map((line, lineIndex) => (
              <span key={lineIndex}>
                {lineIndex > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </span>
        );
      })}
    </>
  );
}

export function PublishedNote({ note }: { note: PublishedNoteData }) {
  const nodes: ReactNode[] = [];
  let index = 0;
  while (index < note.blocks.length) {
    const block = note.blocks[index];
    if (block.type === "li") {
      const items: Array<PublishedBlock & { type: "li" }> = [];
      while (index < note.blocks.length && note.blocks[index].type === "li") {
        items.push(note.blocks[index] as PublishedBlock & { type: "li" });
        index += 1;
      }
      nodes.push(
        <div className="work-list" key={`list-${index}`}>
          {items.map((item, itemIndex) => (
            <article className="work-item" key={itemIndex}>
              <p className="work-year">{String(itemIndex + 1).padStart(2, "0")}</p>
              <div>
                <p>
                  <InlineText inlines={item.inlines} />
                </p>
              </div>
            </article>
          ))}
        </div>
      );
      continue;
    }
    if (block.type === "h2" || block.type === "h3") {
      const Tag = block.type;
      nodes.push(<Tag key={index}>{block.text}</Tag>);
    } else if (block.type === "p") {
      nodes.push(
        <p key={index}>
          <InlineText inlines={block.inlines} />
        </p>
      );
    } else if (block.type === "quote") {
      nodes.push(
        <blockquote className="note-item" key={index}>
          <p>
            <InlineText inlines={block.inlines} />
          </p>
        </blockquote>
      );
    } else if (block.type === "code") {
      nodes.push(
        <pre key={index}>
          <code>{block.text}</code>
        </pre>
      );
    } else if (block.type === "img") {
      nodes.push(
        <figure className="note-figure" key={index}>
          <img src={block.src} alt={block.alt} />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    } else if (block.type === "table") {
      nodes.push(
        <div className="note-table-wrap" key={index}>
          <table className="note-table">
            {block.caption ? <caption>{block.caption}</caption> : null}
            {block.headers.length > 0 ? (
              <thead>
                <tr>
                  {block.headers.map((header, headerIndex) => (
                    <th key={headerIndex}>{header}</th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    index += 1;
  }

  return (
    <>
      <Header lang="zh" current="/" />
      <main id="main">
        <section className="shell hero">
          <p className="hero-spine">调研笔记 · {note.date}</p>
          <div>
            <p className="kicker">{note.kicker}</p>
            <h1>{note.title}</h1>
            {note.lede ? <p className="lede">{note.lede}</p> : null}
          </div>
        </section>
        <section className="shell section">
          <div className="prose">{nodes}</div>
          <p className="source-line">{note.credit}</p>
          <p>
            <Link className="btn ghost" href="/">
              返回主页
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
