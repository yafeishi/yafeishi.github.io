import Link from "next/link";
import { Header } from "../../../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【实测】Hermes 里 6 个模型，谁先吐字？ — Hobson",
  description:
    "短提示下 Hermes 六个模型的首字延迟：MiniMax-M3.1-Flash 中位 0.89 秒，DeepSeek V4.1 Flash 0.91 秒。样本小，不是智商榜。",
  alternates: { canonical: "https://danghb.cn/notes/hermes-ttft/" },
};

const CREDIT = "同步自微信公众号「Hobson 小党」· 2026-10-27 · 原发公众号贴图";

const method = [
  ["环境", "Mac Mini。teamlead 配置，原生 Hermes gateway，Hermes 专用 Magpie key，低推理，并带上正常 Hermes 上下文与工具定义。"],
  ["计时", "从 prompt.submit 前一刻起，到第一条非空可见 message.delta。含提示准备、网络、排队和模型推理，不含建会话。思考中指示不计入可见正文。"],
  ["样本", "每个模型独立隐藏会话：相同短提示 ×3，再加 1 次短追问。24 轮全部流式出字，无工具调用；库表核对无模型 fallback。测试会话已关闭并隐藏。"],
  ["时间", "2026-10-27 00:11:08（Asia/Shanghai）。"],
];

const rows = [
  ["MiniMax-M3.1-Flash", "", "0.89", "0.61–1.49", "1.49", "1.33"],
  ["DeepSeek V4.1 Flash", "deepseek-v4.1-flash-1017", "0.91", "0.68–1.03", "1.03", "1.18"],
  ["Qwen3.8 Flash", "qwen3.8-flash", "1.32", "1.14–2.24", "2.24", "4.65"],
  ["GLM-5.3 Flash", "glm-5.3-flash", "4.12", "1.35–5.51", "5.51", "1.21"],
  ["Kimi k3.1-pro", "k3.1-pro", "4.15", "3.17–5.92", "5.92", "13.81"],
  ["GPT-6.1-sol", "gpt-6.1-sol", "4.79", "3.84–5.57", "3.84", "6.88"],
];

const highlights = [
  ["1 秒内", "两个 Flash 国产路由进 1 秒内：MiniMax-M3.1-Flash 中位 0.89 秒，DeepSeek V4.1 Flash 中位 0.91 秒，体感最接近「秒回」。"],
  ["GLM", "GLM-5.3 Flash 首轮 5.51 秒，追问掉到 1.21 秒。首轮偏慢，缓存或热身后反差大。"],
  ["Kimi", "Kimi k3.1-pro 追问飙到 13.81 秒，短对话场景要小心。"],
  ["GPT-6.1", "GPT-6.1-sol 中位 4.79 秒，三次范围 3.84–5.57 秒，稳定在 4–5 秒档。不算拖后腿，也不抢头条。"],
];

export default function Page() {
  return (
    <>
      <Header lang="zh" current="/" />
      <main id="main">
        <section className="shell hero">
          <p className="hero-spine">实测笔记 · 2026-10-27</p>
          <div>
            <p className="kicker">Hermes / time-to-first-text</p>
            <h1>【实测】Hermes 里 6 个模型，谁先吐字？</h1>
            <p className="lede">
              短提示下，MiniMax-M3.1-Flash 与 DeepSeek V4.1 Flash 中位首字都在 1 秒内；Qwen3.8 Flash 约 1.3 秒；GLM、Kimi、GPT-6.1-sol 落在 4–5 秒档。Kimi 追问明显变慢（13.81 秒），GLM 则是首轮慢、追问很快。这是体感延迟，不是智商榜。
            </p>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>怎么测</h2>
            <p className="section-note">昨晚在 Mac Mini 上跑的一轮 Hermes 原生 gateway 首字延迟基准。</p>
          </div>
          <div className="work-list">
            {method.map(([tag, body]) => (
              <article className="work-item" key={tag}>
                <p className="work-year">{tag}</p>
                <div><p>{body}</p></div>
                <p className="work-tag">方法</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>中位首字</h2>
            <p className="section-note">越短越快。单位：秒。</p>
          </div>
          <div className="note-table-wrap">
            <table className="note-table">
              <caption>按中位首字从快到慢。数据时间 2026-10-27 00:11 Asia/Shanghai。</caption>
              <thead>
                <tr>
                  <th>模型</th>
                  <th className="num">中位首字</th>
                  <th className="num">3 次范围</th>
                  <th className="num">首轮</th>
                  <th className="num">追问</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([name, id, median, range, first, follow]) => (
                  <tr key={name}>
                    <td>
                      {name}
                      {id ? <span className="note-id">{id}</span> : null}
                    </td>
                    <td className="num">{median}</td>
                    <td className="num">{range}</td>
                    <td className="num">{first}</td>
                    <td className="num">{follow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figure className="note-figure">
            <img
              src="/notes/hermes-ttft/median.png"
              alt="Hermes 首字延迟中位条形图。短提示 ×3：MiniMax-M3.1-Flash 0.89 秒，deepseek-v4.1-flash-1017 0.91 秒，qwen3.8-flash 1.32 秒，glm-5.3-flash 4.12 秒，k3.1-pro 4.15 秒，gpt-6.1-sol 4.79 秒。"
            />
            <figcaption>▲ 六模型中位首字对比</figcaption>
          </figure>
          <figure className="note-figure">
            <img
              src="/notes/hermes-ttft/followup.png"
              alt="首轮与追问首字延迟对比。追问：MiniMax 1.33 秒，DeepSeek 1.18 秒，Qwen 4.65 秒，GLM 1.21 秒，Kimi 13.81 秒，GPT-6.1-sol 6.88 秒。"
            />
            <figcaption>▲ 首轮 vs 追问</figcaption>
          </figure>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>看点</h2>
          </div>
          <div className="work-list">
            {highlights.map(([tag, body]) => (
              <article className="work-item" key={tag}>
                <p className="work-year">{tag}</p>
                <div><p>{body}</p></div>
                <p className="work-tag">看点</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>局限</h2>
            <Link className="btn ghost" href="/">返回主页</Link>
          </div>
          <div className="prose">
            <p>样本小、全是短提示。不能代表长上下文、复杂任务或工具链，也不含微信/飞书投递延迟。这是体感延迟，不是智商榜，更不是模型质量排名。</p>
          </div>
          <p className="source-line">{CREDIT}</p>
        </section>
      </main>
    </>
  );
}
