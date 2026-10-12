import Link from "next/link";
import { Header } from "../components/Header";
import { BOOK_CAT_EN, books } from "../content/books";
import { career } from "../content/career";
import { GITHUB_SYNCED_AT, githubProfile, publicProjects } from "../content/github";
import { localePath, type Lang } from "../i18n";
import { ProjectMeta } from "./ProjectMeta";

const featuredBooks = ["无伤跑法", "跑步圣经", "高性能 MySQL", "云原生数据库：原理与实践", "纳瓦尔宝典", "人类简史"].map(
  (title) => books.find((book) => book.title === title)!,
);

const content = {
  zh: {
    spine: "夜航 · 不疾不徐",
    lede: "你好，我是 Hobson，一名解决方案架构师。十五年里，从 Oracle DBA、分布式数据库和金融核心系统，走到企业 AI 与 Agent 工程化。我的工作始终站在业务、客户与技术的交汇处：把复杂问题拆清楚，把隐性 know-how 沉淀下来，再把方案做到真实环境里。",
    ctaWork: "查看实践",
    ctaAbout: "关于我",
    x: "推特 @yafeishi",
    focusTitle: "此刻在做",
    focusNote: "把多年数据与架构经验，转化为企业 AI 时代可复用、可验证的交付能力。",
    focuses: [
      {
        title: "企业 AI 转型",
        body: "从高价值活动出发，识别并沉淀 know-how，再把它重构为 Human + AI 工作流。关注的不只是模型，而是从辅助到委派、再到执行的完整能力闭环。",
      },
      {
        title: "Agent 工程化",
        body: "围绕 Context、Tools、Memory、MCP、RAG 与 Evaluation 做持续实践。让 Agent 有清晰边界、可靠工具、可观测过程和交付前验证。",
      },
      {
        title: "数据与云数据库",
        body: "从 Oracle、PostgreSQL 到分布式与云数据库，继续关注迁移、容灾、性能、混合检索，以及数据基础设施怎样成为 AI 的可靠底座。",
      },
    ],
    projectsTitle: "公开项目",
    projectsNote: "把个人实践整理成可以复用、验证和持续维护的开源项目。",
    github: `GitHub @${githubProfile.login} · ${githubProfile.publicRepos} 个公开仓库 · ${githubProfile.bio} · 同步于 ${GITHUB_SYNCED_AT}`,
    careerTitle: "经历",
    careerNote: "从数据库运维与产品，走向数据与企业 AI 解决方案。",
    notesTitle: "我的判断",
    notesNote: "关于企业 AI、工程落地，以及如何真正把事情做成。",
    notes: [
      {
        source: "架构判断",
        text: "企业 AI 的关键，不是接入一个模型，而是让 Context、Data、Tools、Permissions、Governance 与 Evaluation 形成闭环。",
      },
      {
        source: "转型方法",
        text: "把隐性 know-how 结构化，再沿着 Know-how → Workflow → Agent → Capability，把个人经验变成组织能力。",
      },
      { source: "工程原则", text: "知识与上下文优先，工具契约清晰，验证闭环，工程落地优先。" },
      { source: "周记", text: "要有思考，更要有行动，只有动起来，才有进展。" },
    ],
    worksTitle: "精选实践",
    worksAll: "全部实践",
    works: [
      {
        year: "2026",
        title: "herdr-session-history",
        summary: "Herdr 的按 pane 会话历史栏：列出当前 agent 会话的用户轮次，点击即可跳回 Grok 对应提示。",
        tag: "Herdr / Plugin",
        href: "https://github.com/yafeishi/herdr-session-history",
      },
      {
        year: "2026",
        title: "life-twin 数字分身",
        summary: "把多年的 Obsidian 笔记做成能用我口吻说话的第一人称智能体：本地混合检索、长期记忆、文风画像，以及可持续更新的个人上下文。",
        tag: "AI / Memory",
      },
      {
        year: "2026",
        title: "Agent 生产化方法",
        summary: "围绕 MCP、Skill、Harness、沙箱、可观测性与分层评测，持续整理 Agent 从 Demo 走向稳定交付所需要的工程约束。",
        tag: "Agent / Eval",
      },
      {
        year: "2022—",
        title: "金融行业数据库方案",
        summary: "在证券、期货、保险等场景做选型、PoC、迁移与容灾，把分布式数据库和信创替代收成能上线、可运维的方案。",
        tag: "Data / Database",
      },
    ],
    booksTitle: "工作之外",
    booksAll: "全部书单",
  },
  en: {
    spine: "Night voyage · unhurried",
    lede: "Hi, I'm Hobson, a solutions architect. Over fifteen years I've moved from Oracle DBA work, distributed databases and core financial systems to enterprise AI and agent engineering. My work has always sat where business, customers and technology meet: untangling complex problems, capturing the know-how people carry in their heads, and getting solutions running in real environments.",
    ctaWork: "See my work",
    ctaAbout: "About me",
    x: "X @yafeishi",
    focusTitle: "What I'm working on",
    focusNote: "Turning years of data and architecture experience into delivery capabilities for the AI era — reusable and verifiable.",
    focuses: [
      {
        title: "Enterprise AI transformation",
        body: "Start from high-value activities, surface and capture know-how, then rebuild it as Human + AI workflows. The point isn't just the model — it's closing the loop from assistance to delegation to execution.",
      },
      {
        title: "Agent engineering",
        body: "Ongoing, hands-on work across context, tools, memory, MCP, RAG and evaluation, so agents have clear boundaries, reliable tools, observable runs and verification before anything ships.",
      },
      {
        title: "Data & cloud databases",
        body: "From Oracle and PostgreSQL to distributed and cloud databases: migration, disaster recovery, performance and hybrid search — and how data infrastructure becomes a dependable foundation for AI.",
      },
    ],
    projectsTitle: "Open source",
    projectsNote: "Personal experiments, packaged as open-source projects that others can reuse, verify and maintain.",
    github: `GitHub @${githubProfile.login} · ${githubProfile.publicRepos} public repos · ${githubProfile.bio} · synced ${GITHUB_SYNCED_AT}`,
    careerTitle: "Experience",
    careerNote: "From database operations and product work to data and enterprise AI solutions.",
    notesTitle: "What I believe",
    notesNote: "On enterprise AI, engineering that ships, and how things actually get done.",
    notes: [
      {
        source: "Architecture",
        text: "The key to enterprise AI isn't plugging in a model. It's getting context, data, tools, permissions, governance and evaluation to work as one closed loop.",
      },
      {
        source: "Transformation",
        text: "Make tacit know-how explicit, then follow Know-how → Workflow → Agent → Capability to turn individual experience into organizational capability.",
      },
      {
        source: "Engineering",
        text: "Knowledge and context first. Clear tool contracts. Closed verification loops. Shipping over theorizing.",
      },
      { source: "Weekly journal", text: "Think, yes — but above all, act. Progress only comes from moving." },
    ],
    worksTitle: "Selected work",
    worksAll: "All work",
    works: [
      {
        year: "2026",
        title: "herdr-session-history",
        summary: "A per-pane conversation history rail for Herdr: it lists the turns in the current agent session and jumps straight back to the matching prompt in Grok.",
        tag: "Herdr / Plugin",
        href: "https://github.com/yafeishi/herdr-session-history",
      },
      {
        year: "2026",
        title: "life-twin, a digital twin",
        summary: "Years of Obsidian notes turned into a first-person agent that speaks in my voice: local hybrid search, long-term memory, a writing-style profile and personal context that keeps updating.",
        tag: "AI / Memory",
      },
      {
        year: "2026",
        title: "Taking agents to production",
        summary: "An evolving playbook on MCP, skills, harnesses, sandboxes, observability and layered evaluation — the engineering constraints an agent needs to go from demo to dependable delivery.",
        tag: "Agent / Eval",
      },
      {
        year: "2022—",
        title: "Database solutions for finance",
        summary: "Selection, PoCs, migration and disaster recovery for securities, futures and insurance firms — turning distributed databases and domestic-stack replacements into systems that go live and stay maintainable.",
        tag: "Data / Database",
      },
    ],
    booksTitle: "Beyond work",
    booksAll: "Full reading list",
  },
};

export function HomeView({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Header lang={lang} current="/" />
      <main id="main">
        <section className="shell hero">
          <p className="hero-spine">{t.spine}</p>
          <div>
            <p className="kicker">Solutions Architect / AI × Data</p>
            <h1>
              <em>Hobson</em>
            </h1>
            <p className="lede">{t.lede}</p>
            <div className="hero-meta">
              <span>Enterprise AI · Data · Agent</span>
              <span>Context → Decision → Action</span>
              <a href="https://x.com/yafeishi" target="_blank" rel="noreferrer">
                {t.x}
              </a>
            </div>
            <div className="cta-row">
              <Link className="btn" href={localePath(lang, "/work")}>
                {t.ctaWork}
              </Link>
              <Link className="btn ghost" href={localePath(lang, "/about")}>
                {t.ctaAbout}
              </Link>
            </div>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>{t.focusTitle}</h2>
            <p className="section-note">{t.focusNote}</p>
          </div>
          <div className="grid-3">
            {t.focuses.map((item, index) => (
              <article className="card" key={item.title}>
                <p className="card-index">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>{t.projectsTitle}</h2>
            <p className="section-note">{t.projectsNote}</p>
          </div>
          <div className="work-list">
            {publicProjects.map((project) => (
              <article className="work-item" key={project.name}>
                <p className="work-year">OPEN</p>
                <div>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <p>{project.summary[lang]}</p>
                  <ProjectMeta project={project} lang={lang} />
                </div>
                <p className="work-tag">{project.tag}</p>
              </article>
            ))}
          </div>
          <p className="github-line">
            <a href={githubProfile.url} target="_blank" rel="noreferrer">
              {t.github}
            </a>
          </p>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>{t.careerTitle}</h2>
            <p className="section-note">{t.careerNote}</p>
          </div>
          <div className="timeline">
            {career[lang].map((item) => (
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
            <h2>{t.notesTitle}</h2>
            <p className="section-note">{t.notesNote}</p>
          </div>
          <div className="note-list">
            {t.notes.map((note) => (
              <blockquote className="note-item" key={note.source}>
                <p>{note.text}</p>
                <cite>{note.source}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>{t.worksTitle}</h2>
            <Link className="btn ghost" href={localePath(lang, "/work")}>
              {t.worksAll}
            </Link>
          </div>
          <div className="work-list">
            {t.works.map((work) => (
              <article className="work-item" key={work.title}>
                <p className="work-year">{work.year}</p>
                <div>
                  <h3>
                    {"href" in work && work.href ? (
                      <a href={work.href} target="_blank" rel="noreferrer">
                        {work.title}
                      </a>
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

        <section className="shell section">
          <div className="section-head">
            <h2>{t.booksTitle}</h2>
            <Link className="btn ghost" href={localePath(lang, "/books")}>
              {t.booksAll}
            </Link>
          </div>
          <div className="book-list">
            {featuredBooks.map((book) => (
              <article className="book-item" key={book.title}>
                <p className="book-cat">
                  {lang === "en" ? BOOK_CAT_EN[book.cat as keyof typeof BOOK_CAT_EN] : book.cat}
                </p>
                <h3>{lang === "en" ? book.en.title : book.title}</h3>
                <p>{lang === "en" ? book.en.author : book.author}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
