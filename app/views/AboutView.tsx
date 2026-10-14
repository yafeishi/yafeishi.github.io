import Link from "next/link";
import { Header } from "../components/Header";
import { career } from "../content/career";
import { githubProfile } from "../content/github";
import { localePath, type Lang } from "../i18n";

const content = {
  zh: {
    title: "关于 Hobson",
    prose: [
      "我在上海，是一名解决方案架构师。十五年里，从 Oracle DBA 走到分布式数据库的产品与交付，再进入证券、期货、保险等金融场景，做选型、PoC、迁移、容灾和信创替代。一路上最重要的能力，不是记住多少产品参数，而是把复杂问题还原成可以决策、可以执行、可以验证的方案。",
      "现在，我把这套能力继续用在企业 AI 上。关注 AI Agent、MCP、RAG、Agent Memory、Context Engineering、Harness 与 Evaluation，也关心身份、权限、沙箱、审计和可观测性——因为一个 Demo 能回答问题，不代表它已经能进入生产。",
      "我对企业 AI 转型的理解，是先识别高价值活动，挖出隐藏在组织里的 know-how，再以 Context → Decision → Action 为最小单元，重构 Human + AI 工作流。最终要走完 Know-how → Workflow → Agent → Capability，把个人经验变成可复用、可治理、能持续进化的组织能力。",
      "工作之外，健康排在第一，然后是阅读、跑步和记录。从 2022 年起坚持写周记：读书不只摘金句，更想留下次还能用上的判断；写作也不是为了制造内容，而是让思考留下痕迹。",
      "最近在做 life-twin：把多年的笔记变成一个具备混合检索、长期记忆和个人文风的数字分身。也持续用 Codex、Claude Code、Dify、n8n 等工具验证一种新的工作方式：人负责目标、标准与判断，Agent 在清晰边界内执行。",
    ],
    contactBefore: "如果你想聊聊企业 AI、Agent 工程化、数据库，或只是",
    contactLink: "交换一份书单",
    contactAfter: "，欢迎联系我。",
    portraitRole: "企业 AI 与数据解决方案架构师 @Tencent",
    portraitSchool: "西邮 · 软件工程 · 2007–2011",
    contactTitle: "联系",
    contactNote: "写信，或扫码加微信。",
    qrAlt: "微信二维码：danghb",
    wechat: "微信",
    wechatHint: "注明来源",
    careerTitle: "经历",
    careerNote: "一条从运维、产品与交付，走向数据和企业 AI 架构的路。",
  },
  en: {
    title: "About Hobson",
    prose: [
      "I'm a solutions architect based in Shanghai. Over fifteen years I've gone from Oracle DBA to product and delivery for a distributed database, and on into financial services — securities, futures, insurance — working on database selection, PoCs, migration, disaster recovery and replacing foreign stacks with domestic ones. The most important skill along the way hasn't been memorizing product specs. It's been reducing a complex problem to something people can decide on, execute and verify.",
      "Now I'm applying the same skill to enterprise AI. I focus on AI agents, MCP, RAG, agent memory, context engineering, harnesses and evaluation — and just as much on identity, permissions, sandboxing, auditing and observability. A demo that can answer questions is not the same as something ready for production.",
      "My view of enterprise AI transformation: first find the high-value activities and dig out the know-how buried in the organization, then rebuild Human + AI workflows with Context → Decision → Action as the smallest unit. The goal is to go all the way from Know-how → Workflow → Agent → Capability, turning individual experience into organizational capability that can be reused, governed and keeps improving.",
      "Outside work, health comes first, then reading, running and writing things down. I've kept a weekly journal since 2022. When I read, I'm not collecting quotes — I want to keep the judgments I'll be able to use next time. And I don't write to produce content; I write so my thinking leaves a trace.",
      "Lately I've been building life-twin: turning years of notes into a digital twin with hybrid search, long-term memory and my own writing style. I also keep testing a new way of working with Codex, Claude Code, Dify, n8n and similar tools — people own the goals, the standards and the judgment, and agents execute within clear boundaries.",
    ],
    contactBefore: "If you'd like to talk about enterprise AI, agent engineering or databases — or just ",
    contactLink: "swap reading lists",
    contactAfter: " — I'd love to hear from you.",
    portraitRole: "Enterprise AI & Data Solutions Architect @Tencent",
    portraitSchool: "XUPT · Software Engineering · 2007–2011",
    contactTitle: "Contact",
    contactNote: "Send an email, or scan to add me on WeChat.",
    qrAlt: "WeChat QR code: danghb",
    wechat: "WeChat",
    wechatHint: "Please mention where you found me",
    careerTitle: "Experience",
    careerNote: "A path from operations, product and delivery to data and enterprise AI architecture.",
  },
};

export function AboutView({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <>
      <Header lang={lang} current="/about" />
      <main id="main" className="shell">
        <section className="page-intro">
          <p className="kicker">About</p>
          <h1>{t.title}</h1>
        </section>

        <section className="section about-grid">
          <div className="prose">
            {t.prose.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p>
              {t.contactBefore}
              <Link href={localePath(lang, "/books")}>{t.contactLink}</Link>
              {t.contactAfter}
            </p>
          </div>
          <aside className="portrait">
            <img src="/hobson.jpg?v=anime" alt="Hobson" />
            <div className="portrait-caption">
              <p className="portrait-name">Hobson</p>
              <p className="portrait-meta">
                Dang Hongbo
                <br />
                {t.portraitRole}
                <br />
                Shanghai
                <br />
                yafeishiorcl@gmail.com
                <br />
                {t.portraitSchool}
              </p>
            </div>
          </aside>
        </section>

        <section className="section contact">
          <div className="section-head">
            <h2>{t.contactTitle}</h2>
            <p className="section-note">{t.contactNote}</p>
          </div>
          <div className="contact-card">
            <figure className="wechat-qr">
              <img src="/wechat-qr.jpg?v=3" alt={t.qrAlt} />
            </figure>
            <div>
              <p className="kicker">{t.wechat}</p>
              <p className="contact-id">danghb</p>
              <p className="contact-hint">{t.wechatHint}</p>
              <a className="contact-mail" href="mailto:yafeishiorcl@gmail.com">
                yafeishiorcl@gmail.com
              </a>
              <a className="contact-mail" href={githubProfile.url} target="_blank" rel="noreferrer">
                github.com/{githubProfile.login}
              </a>
              <a className="contact-mail" href="https://x.com/yafeishi" target="_blank" rel="noreferrer">
                x.com/yafeishi
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>{t.careerTitle}</h2>
            <p className="section-note">{t.careerNote}</p>
          </div>
          <div className="timeline">
            {career[lang].map((item) => (
              <article className="timeline-item" key={`${item.year}-${item.role}`}>
                <p className="timeline-year">{item.year}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.org}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
