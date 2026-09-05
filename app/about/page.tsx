import type { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "关于 — Hobson",
  description: "关于 Hobson（党宏博）：数据库、系统、家庭自动化与联系方式。",
};

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
              我是党宏博，网上常用 Hobson、夜飞石、yafeishi。西安邮电大学毕业，Oracle 11G
              OCP。工作围绕数据库和系统：Oracle、PostgreSQL、TDSQL，以及早年给 AntDB
              写过的迁移、备份与运维笔记。
            </p>
            <p>
              现在在腾讯，住上海。业余时间更愿意把家里的设备也当成系统来对待：竖屏家庭大屏、Home
              Assistant 空调适配、ESP32 小实验。接口清楚，状态可见，出了问题能接着查。
            </p>
            <p>
              如果你想聊数据库、家庭自动化，或只是交换一份书单，欢迎写信。
            </p>
            <div className="cta-row">
              <a className="btn" href="mailto:yafeishiorcl@gmail.com">
                写信给我
              </a>
              <a
                className="btn ghost"
                href="https://github.com/yafeishi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <aside className="portrait">
            <p className="portrait-name">
              Hobson
              <br />
              党宏博
            </p>
            <p className="portrait-meta">
              Shanghai
              <br />
              yafeishiorcl@gmail.com
              <br />
              Oracle / PostgreSQL / TDSQL
            </p>
          </aside>
        </section>
      </main>
    </>
  );
}
