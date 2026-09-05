import Link from "next/link";
import { Header } from "./components/Header";

const focuses = [
  {
    index: "01",
    title: "数据库与系统",
    body: "Oracle、PostgreSQL、TDSQL。把迁移、备份和高可用收成一条别人也能接着走的路径。",
  },
  {
    index: "02",
    title: "家庭与 IoT",
    body: "竖屏公告板、空调适配层、ESP32。家里的设备也该有清楚的接口和可见的状态。",
  },
  {
    index: "03",
    title: "写作与实验",
    body: "从 AntDB 迁移笔记，到给自己用的小工具。先写清楚，再动手。",
  },
];

const works = [
  {
    year: "2026",
    title: "家庭大屏",
    summary: "1080×1920 竖屏家庭公告板：天气、照片、状态，贴在家里最显眼的那面墙上。",
    tag: "Home / Web",
    href: "https://github.com/danghb/du-home",
  },
  {
    year: "2026",
    title: "Climate Adapter",
    summary: "给 Home Assistant 的 climate 补上 turn_on / turn_off，让小爱和巴法云能真正关掉空调。",
    tag: "HA / Python",
    href: "https://github.com/danghb/climate-proxy",
  },
  {
    year: "2025",
    title: "YOLO 摸鱼后视镜",
    summary: "摄像头里有几个人、人在哪，桌面浮窗先告诉你。心里有底再继续敲代码。",
    tag: "Vision",
    href: "https://github.com/danghb/moyu_yolov8",
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
              你好，我是 Hobson（党宏博）。做数据库和系统，业余把家里的屏幕、空调和小工具也接进同一套节奏里。
            </p>
            <div className="hero-meta">
              <span>Shanghai</span>
              <span>Oracle · PostgreSQL · TDSQL</span>
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
            <p className="section-note">三件事同时推进：把系统做稳，把家里的设备接上，把判断写下来。</p>
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
              <a
                className="work-item"
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="work-year">{work.year}</p>
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.summary}</p>
                </div>
                <p className="work-tag">{work.tag}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
