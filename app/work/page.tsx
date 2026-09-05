import type { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "作品 — Hobson",
  description: "Hobson 的作品：家庭自动化、IoT、数据库笔记与小工具。",
};

const works = [
  {
    year: "2026",
    title: "家庭大屏",
    summary:
      "1080×1920 竖屏家庭公告板。天气、照片、设备状态贴在墙上，视觉按 Penpot 画板落地。",
    tag: "Home / Web",
    href: "https://github.com/danghb/du-home",
  },
  {
    year: "2026",
    title: "Climate Adapter",
    summary:
      "Home Assistant climate 适配层。源集成能调温，却接不住 turn_on / turn_off 时，由这一层补上。",
    tag: "HA / Python",
    href: "https://github.com/danghb/climate-proxy",
  },
  {
    year: "2025",
    title: "YOLO 摸鱼后视镜",
    summary: "本地摄像头数人、标位置，桌面浮窗先报一声。给自己用的小工具，不为上线。",
    tag: "Vision / Python",
    href: "https://github.com/danghb/moyu_yolov8",
  },
  {
    year: "2025",
    title: "ESP32 实验",
    summary: "UART、MQTT 和一块开发板。把家里的设备从「能亮」做到「能说话」。",
    tag: "IoT",
    href: "https://github.com/danghb/esp-uart",
  },
  {
    year: "2018",
    title: "AntDB 文章",
    summary:
      "从 Oracle 迁到分布式 PostgreSQL 的安装、导出导入、脚本和排障笔记，公开发在 GitHub 与开源中国。",
    tag: "Database / Notes",
    href: "https://github.com/yafeishi/antdb-articles",
  },
  {
    year: "2018",
    title: "yafeishi.com",
    summary: "个人博客备份：AntDB、Linux、Git，以及那年的工作日志。",
    tag: "Writing",
    href: "https://github.com/yafeishi/yafeishi.com",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header current="/work" />
      <main className="shell">
        <section className="page-intro">
          <p className="kicker">Selected Work</p>
          <h1>作品与痕迹</h1>
        </section>
        <section className="section">
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
