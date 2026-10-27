import Link from "next/link";
import { Header } from "../../../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google AI Pro 家庭组 — Hobson",
  description: "Google AI Pro 家庭组贴图：每人 $25/年，2026-10-25 至 2027-10-25，最多 5 位成员。",
  alternates: { canonical: "https://danghb.cn/notes/google-ai-pro-family/" },
};

const CREDIT = "同步自微信公众号「Hobson 小党」· 2026-10-27 · 原发公众号贴图";

const terms = [
  ["价格", "邀请共享，每人 $25 美元/年。"],
  ["周期", "2026年10月25日 至 2027年10月25日，整整一年。"],
  ["人数", "适用于最多 5 位家庭成员。成员需满 18 岁，且与组长处于同一国家或地区。"],
  ["权益", "5TB 云端空间，Gemini Pro 与 Veo，以及 AI 视频生成与进阶影像工具。"],
];

export default function Page() {
  return (
    <>
      <Header lang="zh" current="/" />
      <main id="main">
        <section className="shell hero">
          <p className="hero-spine">贴图笔记 · 2026-10-27</p>
          <div>
            <p className="kicker">Google AI Pro</p>
            <h1>Google AI Pro 家庭组</h1>
            <p className="lede">
              一人订，全家用。邀请加入 Google AI Pro 家庭组：一人订阅，全家共享。
            </p>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>海报</h2>
            <p className="section-note">公众号贴图原文，下面只摘海报上写明的条件。</p>
          </div>
          <figure className="note-figure">
            <img
              src="/notes/google-ai-pro-family/cover.jpg"
              alt="Google AI Pro 家庭组海报：邀请加入，一人订阅全家共享，每人 25 美元每年，订阅周期 2026年10月25日至2027年10月25日。"
            />
            <figcaption>原发公众号贴图</figcaption>
          </figure>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>海报上的条件</h2>
            <Link className="btn ghost" href="/">返回主页</Link>
          </div>
          <div className="work-list">
            {terms.map(([tag, body]) => (
              <article className="work-item" key={tag}>
                <p className="work-year">{tag}</p>
                <div><p>{body}</p></div>
                <p className="work-tag">贴图</p>
              </article>
            ))}
          </div>
          <p className="source-line">{CREDIT}</p>
        </section>
      </main>
    </>
  );
}
