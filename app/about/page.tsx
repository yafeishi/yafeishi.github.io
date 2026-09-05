import type { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "关于 — Hobson",
  description: "关于 Hobson：数据库与 AI 解决方案架构师，做事方式、兴趣与联系方式。",
};

const career = [
  {
    year: "2022—",
    role: "数据库解决方案架构师",
    org: "面向华东金融客户做方案与重点项目支持。",
  },
  {
    year: "2016—2021",
    role: "AntDB 产品规划、交付负责人",
    org: "产品规划、交付标准化、售前与信创。",
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
              我在上海，做数据库与 AI 解决方案。十四年里，从 Oracle
              DBA 走到分布式库的产品与交付，再走进证券、期货、保险这些金融核心系统——选型、PoC、迁移、容灾、信创替代，把方案收到能上线。
            </p>
            <p>
              最近几年也在把大模型用进真实工作：问答 Agent、本地知识库、适配流程，以及给自己用的小工具。做事的信条没变：遇到头疼的事，其实也没那么难，动起来才有进展。
            </p>
            <p>
              工作之外，健康排在第一：没有了好身体，其他都是屁。然后是尽量有意义的工作、纯粹好玩的爱好，以及把关系照顾好。从 2022
              年起坚持写周记，用记录对抗消耗。
            </p>
            <p>
              读书不摘金句，只留下次还能用上的判断。最近在做
              life-twin：把多年的笔记喂成一个能用我口吻说话的数字分身。也把这个站点当成自己的地方——别的服务都可能关掉，只要还被人记得，就不会完全消失。
            </p>
            <p>如果你想聊聊数据库、AI，或只是交换一份书单，欢迎写信。</p>
            <div className="cta-row">
              <a className="btn" href="mailto:yafeishiorcl@gmail.com">
                写信给我
              </a>
            </div>
          </div>
          <aside className="portrait">
            <p className="portrait-name">Hobson</p>
            <p className="portrait-meta">
              Dang Hongbo
              <br />
              数据库与 AI 解决方案架构师
              <br />
              Shanghai
              <br />
              yafeishiorcl@gmail.com
              <br />
              西邮 · 软件工程 · 2007–2011
            </p>
          </aside>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>经历</h2>
            <p className="section-note">一条从运维到方案的路，写在简历里，也写在这里。</p>
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
