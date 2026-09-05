import Link from "next/link";
import { Header } from "./components/Header";

const focuses = [
  {
    index: "01",
    title: "数据库与 AI",
    body: "十四年，从 Oracle DBA 做到金融行业的方案与交付。分布式库、迁移、容灾、信创；也把 Agent 和知识库用到真实工作里。",
  },
  {
    index: "02",
    title: "跑步与身体",
    body: "没有了好身体，其他都是屁。日课是步数过 6666、微运动，以及尽量无伤地跑完三公里。",
  },
  {
    index: "03",
    title: "阅读与记录",
    body: "从 2022 年起按周存档。每天至少写一点，对抗工作对自身的消耗；读书不摘金句，只留下次还能用上的判断。",
  },
];

const notes = [
  {
    source: "周记",
    text: "要有思考，更要有行动，只有动起来，才有进展。",
  },
  {
    source: "生活审视",
    text: "没有了好身体，其他都是屁。",
  },
  {
    source: "日记模板",
    text: "每天至少写一点，对抗无尽工作对自身的消耗。",
  },
  {
    source: "博客回归",
    text: "只要没有被遗忘，就还存在。只有这里才是自己的。",
  },
];

const works = [
  {
    year: "2026",
    title: "life-twin 数字分身",
    summary:
      "把多年的 Obsidian 笔记做成能用我口吻说话的第一人称智能体：本地混合检索、长期记忆、文风画像。",
    tag: "AI / RAG",
  },
  {
    year: "2022—",
    title: "金融行业数据库方案",
    summary:
      "在证券、期货、保险等场景做选型、PoC、迁移与容灾。把分布式数据库和信创替代收成能上线的方案。",
    tag: "Database",
  },
  {
    year: "2022—",
    title: "周记与读书笔记",
    summary:
      "五十多周的存档，七十多本可检索笔记——成长、健康、历史、经济、计算机、小说。",
    tag: "Notes",
  },
];

const career = [
  {
    year: "2022—",
    role: "数据库解决方案架构师",
    org: "金融行业：证券、期货、保险。选型、PoC、迁移、容灾，以及把 Agent 用进日常。",
  },
  {
    year: "2016—2021",
    role: "AntDB 产品规划与交付",
    org: "分布式数据库的规划、标准化、售前与信创。内训 1000+ 人，也在 PG 社区做过分享。",
  },
  {
    year: "2011—2016",
    role: "Oracle DBA / 技术顾问",
    org: "运营商核心系统的安装、架构、优化与培训，后来做过 SQL 审核和专项调优。",
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
            <p className="kicker">Personal Page / 个人主页</p>
            <h1>
              <em>Hobson</em>
            </h1>
            <p className="lede">
              你好，我是 Hobson，人在上海，做数据库与 AI 解决方案。十四年里走过
              Oracle、分布式库和金融核心系统；晚上跑步、读书、写点东西。从 2022
              年起按周记下工作与生活——这一页放作品、放近况，也放还没说完的话。
            </p>
            <div className="hero-meta">
              <span>Shanghai · Database · AI · Running</span>
              <span>不疾不徐，动起来才有进展</span>
              <a href="mailto:yafeishiorcl@gmail.com">yafeishiorcl@gmail.com</a>
            </div>
            <div className="cta-row">
              <Link className="btn" href="/work">
                查看作品
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
              三件事同时推进：把方案做落地，把身体跑好，把判断写下来。
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
            <p className="section-note">从运维到产品，再到金融行业的方案与 AI。</p>
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
            <h2>记下的话</h2>
            <p className="section-note">从周记和备忘里抽出来的、还想继续用的句子。</p>
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
            <h2>精选作品</h2>
            <Link className="btn ghost" href="/work">
              全部作品
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
            <h2>在读与读过</h2>
            <p className="section-note">从笔记库里挑几本还想继续谈的。</p>
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
