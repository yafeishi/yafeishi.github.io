import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "实践 — Hobson",
  description: "Hobson 在企业 AI、Agent 工程化、数据与数据库方向的实践。",
};

const works = [
  {
    year: "2026",
    title: "life-twin 数字分身",
    summary:
      "把多年的 Obsidian 笔记做成一个用我口吻说话的第一人称智能体：本地混合检索、长期记忆、文风画像和持续更新的个人上下文。它既是个人工具，也是一次对 RAG 与 Memory 边界的长期实验。",
    tag: "AI / Memory",
  },
  {
    year: "2026",
    title: "企业 AI 转型方法",
    summary:
      "从高价值活动与隐性 know-how 出发，以 Context → Decision → Action 为最小单元重构工作流，再沿着 Know-how → Workflow → Agent → Capability，把局部提效推进到组织能力。",
    tag: "AI Transformation",
  },
  {
    year: "2026",
    title: "Agent 生产化实践",
    summary:
      "持续研究并实践 MCP、Skill、Harness、上下文与记忆管理、沙箱、可观测性和分层评测。重点不是让 Agent 偶尔成功，而是让它在明确权限和验证闭环中稳定交付。",
    tag: "Agent / Eval",
  },
  {
    year: "2026",
    title: "VerbatimFlow",
    summary:
      "用 Codex 在一天内完成 Mac 语音输入工具的可用原型，并解决应用签名导致权限失效、热键释放事件丢失等系统级问题。一次关于人定义目标与边界、Agent 加速实现的完整练习。",
    tag: "AI Coding / macOS",
  },
  {
    year: "2026",
    title: "夜航卡",
    summary: "用 Next.js App Router 搭建并持续更新的个人主页：放经历、实践、书单，也把不断形成的判断留在自己的地方。",
    tag: "Web / Next.js",
  },
  {
    year: "2022—",
    title: "金融行业数据库方案",
    summary:
      "面向证券、期货、保险等客户做数据库选型、PoC、迁移同步、高可用容灾与信创替代，把分布式数据库收到能上线、可运维的方案。",
    tag: "Data / Database",
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
      "在 PG Open、PostgreSQL 中国技术大会、PGCONF 等场合分享过高可用演进、业务驱动的创新，以及并行聚合。",
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
    title: "周记与读书笔记库",
    summary:
      "持续存档工作与生活，也积累七十多本书的可检索笔记。用记录对抗消耗，不只收藏观点，更留下可以复用的判断。",
    tag: "Notes",
    href: "/books",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header current="/work" />
      <main className="shell">
        <section className="page-intro">
          <p className="kicker">Selected Practice</p>
          <h1>实践与痕迹</h1>
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
