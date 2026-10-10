import Link from "next/link";
import { Header } from "../components/Header";
import { localePath, type Lang } from "../i18n";

type Work = {
  year: string;
  tag: string;
  href?: string;
  zh: { title: string; summary: string };
  en: { title: string; summary: string };
};

const works: Work[] = [
  {
    year: "2026",
    tag: "Video / Node.js",
    href: "https://github.com/yafeishi/video-maker",
    zh: {
      title: "video-maker 视频工作台",
      summary:
        "用代码导演和渲染短片：画面是 render(t) 函数，无头 Chrome 逐帧截图，配音、配乐、拟音和字幕跟同一条时间线，最后 ffmpeg 出片。工作台里可以实时预览、拖时间轴、一键渲染，并生成各平台的发布文案。",
    },
    en: {
      title: "video-maker",
      summary:
        "Directing and rendering short films in code: each frame comes from a render(t) function, headless Chrome captures it, and voice-over, music, sound effects and subtitles share one timeline before ffmpeg assembles the cut. The studio offers live preview, timeline scrubbing, one-click renders and per-platform publishing copy.",
    },
  },
  {
    year: "2026",
    tag: "Herdr / Plugin",
    href: "https://github.com/yafeishi/herdr-session-history",
    zh: {
      title: "herdr-session-history",
      summary:
        "给 Herdr 写的社区插件：每个 agent pane 各自一份当前会话轮次列表，选中一行就把 Grok 滚动区跳到那条用户输入。按 pane 绑定，而不是全局聊天墙。",
    },
    en: {
      title: "herdr-session-history",
      summary:
        "A community plugin for Herdr: every agent pane gets its own list of turns in the current session, and selecting one jumps Grok's scrollback to that prompt. It's scoped to the pane rather than one global chat wall.",
    },
  },
  {
    year: "2026",
    tag: "AI / Memory",
    zh: {
      title: "life-twin 数字分身",
      summary:
        "把多年的 Obsidian 笔记做成一个用我口吻说话的第一人称智能体：本地混合检索、长期记忆、文风画像和持续更新的个人上下文。它既是个人工具，也是一次对 RAG 与 Memory 边界的长期实验。",
    },
    en: {
      title: "life-twin, a digital twin",
      summary:
        "Years of Obsidian notes turned into a first-person agent that talks the way I do: local hybrid search, long-term memory, a writing-style profile and personal context that keeps updating. It's a personal tool and a long-running experiment on where RAG and memory reach their limits.",
    },
  },
  {
    year: "2026",
    tag: "AI Transformation",
    zh: {
      title: "企业 AI 转型方法",
      summary:
        "从高价值活动与隐性 know-how 出发，以 Context → Decision → Action 为最小单元重构工作流，再沿着 Know-how → Workflow → Agent → Capability，把局部提效推进到组织能力。",
    },
    en: {
      title: "An enterprise AI transformation method",
      summary:
        "Start from high-value activities and tacit know-how, rebuild workflows with Context → Decision → Action as the smallest unit, then follow Know-how → Workflow → Agent → Capability to grow local efficiency gains into organizational capability.",
    },
  },
  {
    year: "2026",
    tag: "Agent / Eval",
    zh: {
      title: "Agent 生产化实践",
      summary:
        "持续研究并实践 MCP、Skill、Harness、上下文与记忆管理、沙箱、可观测性和分层评测。重点不是让 Agent 偶尔成功，而是让它在明确权限和验证闭环中稳定交付。",
    },
    en: {
      title: "Agents in production",
      summary:
        "Ongoing research and practice in MCP, skills, harnesses, context and memory management, sandboxing, observability and layered evaluation. The point isn't getting an agent to succeed now and then — it's getting it to deliver reliably within explicit permissions and a closed verification loop.",
    },
  },
  {
    year: "2026",
    tag: "AI Coding / macOS",
    zh: {
      title: "VerbatimFlow",
      summary:
        "用 Codex 在一天内完成 Mac 语音输入工具的可用原型，并解决应用签名导致权限失效、热键释放事件丢失等系统级问题。一次关于人定义目标与边界、Agent 加速实现的完整练习。",
    },
    en: {
      title: "VerbatimFlow",
      summary:
        "A working prototype of a Mac voice-typing tool, built with Codex in a single day — including system-level fixes for permissions lost to app re-signing and dropped hotkey-release events. A full exercise in people defining the goals and boundaries while an agent speeds up the build.",
    },
  },
  {
    year: "2026",
    tag: "Web / Next.js",
    href: "https://github.com/yafeishi/yafeishi.github.io",
    zh: {
      title: "夜航卡",
      summary: "用 Next.js App Router 搭建并持续更新的个人主页：放经历、实践、书单，也把不断形成的判断留在自己的地方。",
    },
    en: {
      title: "Night Voyage (this site)",
      summary:
        "This personal site, built with the Next.js App Router and updated as I go: experience, work and reading, plus a place of my own for the judgments I keep forming.",
    },
  },
  {
    year: "2022—",
    tag: "Data / Database",
    zh: {
      title: "金融行业数据库方案",
      summary:
        "面向证券、期货、保险等客户做数据库选型、PoC、迁移同步、高可用容灾与信创替代，把分布式数据库收到能上线、可运维的方案。",
    },
    en: {
      title: "Database solutions for finance",
      summary:
        "Database selection, PoCs, migration and replication, high availability, disaster recovery and domestic-stack replacement for securities, futures and insurance clients — turning distributed databases into systems that go live and stay operable.",
    },
  },
  {
    year: "2016—2021",
    tag: "Product",
    zh: {
      title: "AntDB 产品规划与交付",
      summary: "负责分布式数据库的产品规划、交付标准化、售前与信创。做过内训师，累计培训一千多人，也主导过认证课程。",
    },
    en: {
      title: "AntDB product planning & delivery",
      summary:
        "Owned product planning, delivery standards, presales and domestic-stack replacement for a distributed database. Also an internal trainer — more than a thousand people trained — and led the certification course.",
    },
  },
  {
    year: "2018—2020",
    tag: "Talk",
    zh: {
      title: "社区分享",
      summary: "在 PG Open、PostgreSQL 中国技术大会、PGCONF 等场合分享过高可用演进、业务驱动的创新，以及并行聚合。",
    },
    en: {
      title: "Community talks",
      summary:
        "Talks at PG Open, the PostgreSQL China Conference, PGCONF and others on the evolution of high availability, business-driven innovation and parallel aggregation.",
    },
  },
  {
    year: "2011—2016",
    tag: "DBA",
    zh: {
      title: "Oracle 运维与优化",
      summary: "运营商 CRM / BOSS 等系统的安装、架构、性能与培训；后来做过 SQL 审核产品的售前、PoC 和专项调优。",
    },
    en: {
      title: "Oracle operations & tuning",
      summary:
        "Installation, architecture, performance and training for telecom CRM, BOSS and other systems; later presales, PoCs and targeted tuning for a SQL review product.",
    },
  },
  {
    year: "2020",
    tag: "Writing",
    zh: {
      title: "分布式事务实践",
      summary: "从真实业务抽象出 TCC、Saga 的入门理解，并写过一个小的 Saga 框架：关心成功、失败、超时三种路径上的最终一致性。",
    },
    en: {
      title: "Distributed transactions in practice",
      summary:
        "An introduction to TCC and Saga drawn from real business cases, plus a small Saga framework of my own — focused on eventual consistency across the success, failure and timeout paths.",
    },
  },
  {
    year: "2022—",
    tag: "Notes",
    href: "/books",
    zh: {
      title: "周记与读书笔记库",
      summary: "持续存档工作与生活，也积累七十多本书的可检索笔记。用记录对抗消耗，不只收藏观点，更留下可以复用的判断。",
    },
    en: {
      title: "Weekly journal & reading notes",
      summary:
        "An ongoing archive of work and life, plus searchable notes on more than seventy books. Writing things down pushes back against burnout — not just collecting opinions, but keeping judgments I can reuse.",
    },
  },
];

const intro = {
  zh: { title: "实践与痕迹" },
  en: { title: "Work & traces" },
};

export function WorkView({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} current="/work" />
      <main id="main" className="shell">
        <section className="page-intro">
          <p className="kicker">Selected Practice</p>
          <h1>{intro[lang].title}</h1>
        </section>
        <section className="section">
          <div className="work-list">
            {works.map((work) => {
              const text = work[lang];
              return (
                <article className="work-item" key={work.zh.title}>
                  <p className="work-year">{work.year}</p>
                  <div>
                    <h3>
                      {work.href ? (
                        work.href.startsWith("http") ? (
                          <a href={work.href} target="_blank" rel="noreferrer">
                            {text.title}
                          </a>
                        ) : (
                          <Link href={localePath(lang, work.href as "/books")}>{text.title}</Link>
                        )
                      ) : (
                        text.title
                      )}
                    </h3>
                    <p>{text.summary}</p>
                  </div>
                  <p className="work-tag">{work.tag}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
