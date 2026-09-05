import type { Metadata } from "next";
import { Header } from "../components/Header";
import { BooksCatalog } from "./BooksCatalog";
import { books } from "./data";

export const metadata: Metadata = {
  title: "书单 — Hobson",
  description: "Hobson 的公开书单：跑步、健康、数据库、工作与还在翻的书。",
};

export default function BooksPage() {
  return (
    <>
      <Header current="/books" />
      <main className="shell">
        <section className="page-intro">
          <p className="kicker">Reading List</p>
          <h1>书单</h1>
          <p className="lede">
            从笔记库里列出来的 {books.length}{" "}
            本。不摘金句；有判断的才写一句，其余只记读到哪。
          </p>
        </section>
        <section className="section">
          <BooksCatalog />
        </section>
      </main>
    </>
  );
}
