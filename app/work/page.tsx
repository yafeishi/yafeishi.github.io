import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "作品 — Hobson",
  description: "Hobson 的作品与进行中的项目。",
};

const works = [
  {
    year: "2026",
    title: "life-twin 数字分身",
    summary:
      "把多年的 Obsidian 笔记做成一个用我口吻说话的第一人称智能体：本地混合检索、长期记忆、文风画像。和工作里搭 Agent、建知识库是同一条路上的事。",
    tag: "AI / RAG",
  },
  {
    year: "2026",
    title: "夜航卡",
    summary: "用 Next.js App Router 搭起来的个人主页。一页介绍自己，两页展开关于与作品。",
    tag: "Web / Next.js",
  },
  {
    year: "2022—",
    title: "金融行业数据库方案",
    summary:
      "面向证券、期货、保险等客户做数据库选型、PoC、迁移同步、高可用容灾与信创替代。把分布式库收到能上线的方案，也把 Agent 用进咨询和适配。",
    tag: "Database",
  },
  {
    year: "2016—2021",
    title: "AntDB 产品规划与交付",
    summary:
      "负责分布式数据库的产品规划、交付标准化、售前与信创。做过内训师，累计培训一千多人，也主导过认证课程。",
    tag: "Product",
  },
  {
    year: "2018—2020",
    title: "社区分享",
    summary:
      "在 PG open、PostgreSQL 中国技术大会、PGCONF 等场合分享过高可用演进、业务驱动的创新，以及并行聚合。",
    tag: "Talk",
  },
  {
    year: "2011—2016",
    title: "Oracle 运维与优化",
    summary:
      "运营商 CRM / BOSS 等系统的安装、架构、性能与培训；后来做过 SQL 审核产品的售前、PoC 和专项调优。",
    tag: "DBA",
  },
  {
    year: "2020",
    title: "分布式事务实践",
    summary:
      "从真实业务抽象出 TCC、Saga 的入门理解，并写过一个小的 Saga 框架：关心成功、失败、超时三种路径上的最终一致性。",
    tag: "Writing",
  },
  {
    year: "2022—",
    title: "周记",
    summary:
      "从 2022 年起按周存档工作与生活，五十多周。用打分、清单和自我提醒维持秩序感——用记录对抗消耗。",
    tag: "Writing",
  },
  {
    year: "2022—",
    title: "读书笔记库",
    summary:
      "七十多本书的可检索笔记。公开书单在这里：跑步、健康、数据库、工作、成长、历史和小说。不摘金句，只留可复用的判断。",
    tag: "Notes",
    href: "/books",
  },
  {
    year: "2022—",
    title: "跑步计划",
    summary:
      "以《无伤跑法》《跑步圣经》为纲。日课是步数过 6666、平板支撑和拉伸，以及尽量无伤地跑完三公里。",
    tag: "Running",
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
                  <h3>
                    {"href" in work && work.href ? (
                      <Link href={work.href}>{work.title}</Link>
                    ) : (
                      work.title
                    )}
                  </h3>
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
