import Link from "next/link";
import { Header } from "./components/Header";

const focuses = [
  {
    index: "01",
    title: "企业 AI 转型",
    body: "从高价值活动出发，识别并沉淀 know-how，再把它重构为 Human + AI 工作流。关注的不只是模型，而是从辅助到委派、再到执行的完整能力闭环。",
  },
  {
    index: "02",
    title: "Agent 工程化",
    body: "围绕 Context、Tools、Memory、MCP、RAG 与 Evaluation 做持续实践。让 Agent 有清晰边界、可靠工具、可观测过程和交付前验证。",
  },
  {
    index: "03",
    title: "数据与云数据库",
    body: "从 Oracle、PostgreSQL 到分布式与云数据库，继续关注迁移、容灾、性能、混合检索，以及数据基础设施怎样成为 AI 的可靠底座。",
  },
];

const notes = [
  {
    source: "架构判断",
    text: "企业 AI 的关键，不是接入一个模型，而是让 Context、Data、Tools、Permissions、Governance 与 Evaluation 形成闭环。",
  },
  {
    source: "转型方法",
    text: "把隐性 know-how 结构化，再沿着 Know-how → Workflow → Agent → Capability，把个人经验变成组织能力。",
  },
  {
    source: "工程原则",
    text: "知识与上下文优先，工具契约清晰，验证闭环，工程落地优先。",
  },
  {
    source: "周记",
    text: "要有思考，更要有行动，只有动起来，才有进展。",
  },
];

const works = [
  {
    year: "2026",
    title: "life-twin 数字分身",
    summary:
      "把多年的 Obsidian 笔记做成能用我口吻说话的第一人称智能体：本地混合检索、长期记忆、文风画像，以及可持续更新的个人上下文。",
    tag: "AI / Memory",
  },
  {
    year: "2026",
    title: "Agent 生产化方法",
    summary:
      "围绕 MCP、Skill、Harness、沙箱、可观测性与分层评测，持续整理 Agent 从 Demo 走向稳定交付所需要的工程约束。",
    tag: "Agent / Eval",
  },
  {
    year: "2022—",
    title: "金融行业数据库方案",
    summary:
      "在证券、期货、保险等场景做选型、PoC、迁移与容灾，把分布式数据库和信创替代收成能上线、可运维的方案。",
    tag: "Data / Database",
  },
];

const career = [
  {
    year: "2022—",
    role: "数据库解决方案架构师 / AI 方案实践",
    org: "服务金融及更多行业，负责数据库选型、PoC、迁移与容灾，并探索 Agent、知识库和评测在真实交付中的应用。",
  },
  {
    year: "2016—2021",
    role: "AntDB 产品规划与交付",
    org: "分布式数据库的规划、标准化、售前与信创。内训 1000+ 人，也在 PostgreSQL 社区做过分享。",
  },
  {
    year: "2011—2016",
    role: "Oracle DBA / 技术顾问",
    org: "运营商核心系统的安装、架构、优化与培训，后来负责 SQL 审核产品的 PoC 和专项调优。",
  },
];

const books = [
  { title: "无伤跑法", author: "戴剑松 / 郑家轩", cat: "跑步" },
  { title: "跑步圣经", author: "赫尔伯特·史迪凡尼", cat: "跑步" },
  { title: "高性能 MySQL", author: "Baron Schwartz 等", cat: "数据库" },
  { title: "云原生数据库：原理与实践", author: "李飞飞 等", cat: "数据库" },
  { title: "纳瓦尔宝典", author: "纳瓦尔", cat: "成长" },
  { title: "人类简史", author: "尤瓦尔·赫拉利", cat: "历史" },
];

export default function HomePage() {
  return (
    <>
      <Header current="/" />
      <main>
        <section className="shell hero">
          <p className="hero-spine">夜航 · 不疾不徐</p>
          <div>
            <p className="kicker">Solution Architect / AI × Data</p>
            <h1>
              <em>Hobson</em>
            </h1>
            <p className="lede">
              你好，我是 Hobson，一名解决方案架构师。十五年里，从 Oracle DBA、分布式数据库和金融核心系统，走到企业 AI 与 Agent 工程化。我的工作始终站在业务、客户与技术的交汇处：把复杂问题拆清楚，把隐性 know-how 沉淀下来，再把方案做到真实环境里。
            </p>
            <div className="hero-meta">
              <span>Enterprise AI · Data · Agent</span>
              <span>Context → Decision → Action</span>
            </div>
            <div className="cta-row">
              <Link className="btn" href="/work">
                查看实践
              </Link>
              <Link className="btn ghost" href="/about">
                关于我
              </Link>
            </div>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>此刻在做</h2>
            <p className="section-note">
              把多年数据与架构经验，转化为企业 AI 时代可复用、可验证的交付能力。
            </p>
          </div>
          <div className="grid-3">
            {focuses.map((item) => (
              <article className="card" key={item.index}>
                <p className="card-index">{item.index}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>经历</h2>
            <p className="section-note">从数据库运维与产品，走向数据与企业 AI 解决方案。</p>
          </div>
          <div className="timeline">
            {career.map((item) => (
              <article className="timeline-item" key={item.year}>
                <p className="timeline-year">{item.year}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.org}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>我的判断</h2>
            <p className="section-note">关于企业 AI、工程落地，以及如何真正把事情做成。</p>
          </div>
          <div className="note-list">
            {notes.map((note) => (
              <blockquote className="note-item" key={note.source}>
                <p>{note.text}</p>
                <cite>{note.source}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>精选实践</h2>
            <Link className="btn ghost" href="/work">
              全部实践
            </Link>
          </div>
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

        <section className="shell section">
          <div className="section-head">
            <h2>工作之外</h2>
            <Link className="btn ghost" href="/books">
              全部书单
            </Link>
          </div>
          <div className="book-list">
            {books.map((book) => (
              <article className="book-item" key={book.title}>
                <p className="book-cat">{book.cat}</p>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
