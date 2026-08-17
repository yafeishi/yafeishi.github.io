import type { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "作品 — Orcl Yafeishi",
  description: "Orcl Yafeishi 的作品与进行中的项目。",
};

const works = [
  {
    year: "2026",
    title: "夜航卡",
    summary: "用 Next.js App Router 的 page 搭起来的个人主页。一页介绍自己，两页展开关于与作品。",
    tag: "Web / Next.js",
  },
  {
    year: "2025",
    title: "日常工具箱",
    summary: "一组给自己用的小工具：整理笔记、追踪习惯、把重复劳动从浏览器里拿走。",
    tag: "Tools",
  },
  {
    year: "2024",
    title: "阅读笔记",
    summary: "从书、对话和失败项目里抽出可复用的判断，按主题归档，而不是按日期堆放。",
    tag: "Notes",
  },
  {
    year: "2023",
    title: "实验页面",
    summary: "一些只为试一种排版、一种节奏而存在的页面。大部分没有上线，但留下了手感。",
    tag: "Studio",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header current="/work" />
      <main className="shell">
        <section className="page-intro">
          <p className="kicker">Selected Work</p>
          <h1>作品与痕迹</h1>
        </section>
        <section className="section">
          <div className="work-list">
            {works.map((work) => (
              <article className="work-item" key={work.title}>
                <p className="work-year">{work.year}</p>
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.summary}</p>
                </div>
                <p className="work-tag">{work.tag}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
