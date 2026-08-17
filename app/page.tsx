import Link from "next/link";
import { Header } from "./components/Header";

const focuses = [
  {
    index: "01",
    title: "产品与体验",
    body: "把模糊的需求收成一条清晰路径，让界面、节奏和反馈都站在使用者这边。",
  },
  {
    index: "02",
    title: "工程与系统",
    body: "喜欢把复杂流程拆成可维护的模块，让页面、数据和协作都更稳一点。",
  },
  {
    index: "03",
    title: "写作与记录",
    body: "用短笔记留下判断过程。不是为了完整，是为了下次还能接上。",
  },
];

const works = [
  {
    year: "2026",
    title: "夜航卡",
    summary: "这本个人主页本身：一页纸、一条脊、几件正在做的事。",
    tag: "Web",
  },
  {
    year: "2025",
    title: "日常工具箱",
    summary: "把重复劳动收进小工具，让注意力回到真正要决定的地方。",
    tag: "Tools",
  },
  {
    year: "2024",
    title: "阅读笔记",
    summary: "从书和对话里抽出可复用的判断，而不是摘抄金句。",
    tag: "Notes",
  },
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
              你好，我是 Hobson。这是一页给自己用的主页：放作品、放近况，也放还没说完的话。
            </p>
            <div className="hero-meta">
              <span>Based in the internet</span>
              <span>Writing · Building · Observing</span>
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
            <p className="section-note">三件事同时推进：把体验做干净，把系统做稳，把判断写下来。</p>
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
      </main>
    </>
  );
}
