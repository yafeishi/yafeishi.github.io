import Link from "next/link";
import { Header } from "../../../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPT-6 四档怎么选？ — Hobson",
  description: "Astra、Sol、Terra、Luna 四档的官方价格与适用场景。难的用强的，简单的用省的。",
  alternates: { canonical: "https://danghb.cn/notes/gpt-6-tiers/" },
};

const CREDIT = "同步自微信公众号「Hobson 小党」· 2026-10-27 · 原发公众号贴图";

const tiers = [
  [
    "$10 / $50",
    "Astra",
    "gpt-6-astra",
    "最难的活交给它。适合复杂推理、编程、专业重活。推理 low → max（文档未列 none）。知识截止 2026-04-30，上下文约 1.05M。",
  ],
  [
    "$2 / $10",
    "Sol",
    "gpt-6.1-sol",
    "复杂活也想控成本。接近 Astra 的复杂工作，更便宜：进价与出价都是 Astra 的五分之一。推理 low → max。知识截止 2026-04-30，上下文约 1.05M。",
  ],
  [
    "$1 / $5",
    "Terra",
    "gpt-6.1-terra",
    "看图、写字、点屏幕，要快就它。适合视觉推理、精准 computer use、自然写作。推理含 none，可更快更省。上下文约 1.05M。",
  ],
  [
    "$0.1 / $0.5",
    "Luna",
    "gpt-6-luna",
    "大批量简单活，省着用。适合聚焦、高吞吐任务。推理含 none。上下文约 1.05M。",
  ],
];

const picks = [
  ["特别难", "Astra"],
  ["复杂又控成本", "Sol"],
  ["看图 / 写字 / 点屏幕", "Terra"],
  ["大批量简单活", "Luna"],
];

const sources = [
  ["OpenAI Models", "https://developers.openai.com/api/docs/models"],
  ["OpenAI Pricing", "https://developers.openai.com/api/docs/pricing"],
];

export default function Page() {
  return (
    <>
      <Header lang="zh" current="/" />
      <main id="main">
        <section className="shell hero">
          <p className="hero-spine">选型笔记 · 2026-10-27</p>
          <div>
            <p className="kicker">OpenAI / GPT-6</p>
            <h1>GPT-6 四档怎么选？</h1>
            <p className="lede">
              OpenAI 出了四档新模型：Astra、Sol、Terra、Luna。难的用强的，简单的用省的。
            </p>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>四档</h2>
            <p className="section-note">价格为美元 / 百万 token，API Standard 短上下文口径。</p>
          </div>
          <figure className="note-figure is-poster">
            <img
              src="/notes/gpt-6-tiers/cover.jpg"
              alt="GPT-6 四档怎么选？Astra、Sol、Terra、Luna。难用强的，简单用省的。据 OpenAI 开发者文档。"
            />
            <figcaption>封面 · Astra · Sol · Terra · Luna</figcaption>
          </figure>
          <div className="grid-2">
            {tiers.map(([price, name, id, body]) => (
              <article className="card" key={id}>
                <p className="card-index">{price}</p>
                <h3>
                  {name}
                  <span className="note-id">{id}</span>
                </h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>怎么选</h2>
            <p className="section-note">记这一句：难用强的，简单用省的。</p>
          </div>
          <div className="work-list">
            {picks.map(([when, tier]) => (
              <article className="work-item" key={tier}>
                <p className="work-year">{tier}</p>
                <div><p>{when}</p></div>
                <p className="work-tag">选型</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>口径</h2>
            <Link className="btn ghost" href="/">返回主页</Link>
          </div>
          <div className="prose">
            <p>价格单位是美元 / 百万 token，按 API Standard 短上下文口径。据 OpenAI 开发者文档，以官网当日页为准。</p>
            {sources.map(([name, url]) => (
              <p key={url}><a href={url} target="_blank" rel="noreferrer">{name}</a> — {url}</p>
            ))}
          </div>
          <p className="source-line">{CREDIT}</p>
        </section>
      </main>
    </>
  );
}
