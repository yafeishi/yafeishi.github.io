import type { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "关于 — Hobson",
  description: "关于 Hobson：做事方式、兴趣与联系方式。",
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
              我习惯先把问题写清楚，再动手。页面、流程、接口，对我来说都是同一件事：让下一个人（包括未来的自己）能接着走。
            </p>
            <p>
              最近更关心两件事。一是如何把复杂系统收成安静的界面；二是如何把判断留下来，而不是只留下结果。
            </p>
            <p>
              如果你想聊聊产品、工程，或只是交换一份书单，欢迎写信。
            </p>
            <div className="cta-row">
              <a className="btn" href="mailto:yafeishiorcl@gmail.com">
                写信给我
              </a>
            </div>
          </div>
          <aside className="portrait">
            <p className="portrait-name">Hobson</p>
            <p className="portrait-meta">
              yafeishiorcl@gmail.com
              <br />
              Building in public, quietly.
            </p>
          </aside>
        </section>
      </main>
    </>
  );
}
