import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "关于 — Hobson",
  description: "关于 Hobson：企业 AI 与数据解决方案架构师，关注 Agent 工程化、云数据库与企业 AI 转型。",
};

const career = [
  {
    year: "2022—",
    role: "数据库解决方案架构师 / AI 方案实践",
    org: "面向金融及更多行业做数据库方案与重点项目支持，并探索 AI Agent 在真实交付中的应用。",
  },
  {
    year: "2016—2021",
    role: "AntDB 产品规划、交付负责人",
    org: "产品规划、交付标准化、售前与信创，累计完成 1000+ 人次内训。",
  },
  {
    year: "2016",
    role: "Oracle 技术顾问",
    org: "SQL 审核产品的售前、PoC 与性能优化。",
  },
  {
    year: "2011—2015",
    role: "Oracle DBA",
    org: "多省运营商 CRM / BOSS 等系统的部署、架构与优化。",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header current="/about" />
      <main className="shell">
        <section className="page-intro">
          <p className="kicker">About</p>
          <h1>关于 Hobson</h1>
        </section>

        <section className="section about-grid">
          <div className="prose">
            <p>
              我在上海，是一名解决方案架构师。十五年里，从 Oracle DBA 走到分布式数据库的产品与交付，再进入证券、期货、保险等金融场景，做选型、PoC、迁移、容灾和信创替代。一路上最重要的能力，不是记住多少产品参数，而是把复杂问题还原成可以决策、可以执行、可以验证的方案。
            </p>
            <p>
              现在，我把这套能力继续用在企业 AI 上。关注 AI Agent、MCP、RAG、Agent Memory、Context Engineering、Harness 与 Evaluation，也关心身份、权限、沙箱、审计和可观测性——因为一个 Demo 能回答问题，不代表它已经能进入生产。
            </p>
            <p>
              我对企业 AI 转型的理解，是先识别高价值活动，挖出隐藏在组织里的 know-how，再以 Context → Decision → Action 为最小单元，重构 Human + AI 工作流。最终要走完 Know-how → Workflow → Agent → Capability，把个人经验变成可复用、可治理、能持续进化的组织能力。
            </p>
            <p>
              工作之外，健康排在第一，然后是阅读、跑步和记录。从 2022 年起坚持写周记：读书不只摘金句，更想留下次还能用上的判断；写作也不是为了制造内容，而是让思考留下痕迹。
            </p>
            <p>
              最近在做 life-twin：把多年的笔记变成一个具备混合检索、长期记忆和个人文风的数字分身。也持续用 Codex、Claude Code、Dify、n8n 等工具验证一种新的工作方式：人负责目标、标准与判断，Agent 在清晰边界内执行。
            </p>
            <p>
              如果你想聊聊企业 AI、Agent 工程化、数据库，或只是
              <Link href="/books">交换一份书单</Link>，欢迎联系我。
            </p>
          </div>
          <aside className="portrait">
            <img src="/hobson.jpg?v=anime" alt="Hobson" />
            <div className="portrait-caption">
              <p className="portrait-name">Hobson</p>
              <p className="portrait-meta">
                Dang Hongbo
                <br />
                企业 AI 与数据解决方案架构师
                <br />
                Shanghai
                <br />
                yafeishiorcl@gmail.com
                <br />
                西邮 · 软件工程 · 2007–2011
              </p>
            </div>
          </aside>
        </section>

        <section className="section contact">
          <div className="section-head">
            <h2>联系</h2>
            <p className="section-note">写信，或扫码加微信。</p>
          </div>
          <div className="contact-card">
            <figure className="wechat-qr">
              <img src="/wechat-qr.jpg?v=3" alt="微信二维码：danghb" />
            </figure>
            <div>
              <p className="kicker">微信</p>
              <p className="contact-id">danghb</p>
              <p className="contact-hint">注明来源</p>
              <a className="contact-mail" href="mailto:yafeishiorcl@gmail.com">
                yafeishiorcl@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>经历</h2>
            <p className="section-note">一条从运维、产品与交付，走向数据和企业 AI 架构的路。</p>
          </div>
          <div className="timeline">
            {career.map((item) => (
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
