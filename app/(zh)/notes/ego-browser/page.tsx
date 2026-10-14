import Link from "next/link";
import { Header } from "../../../components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "为什么 ego 浏览器比 Chrome 更适合 Agent — Hobson",
  description: "调研笔记：ego (lite) 是什么、和 Chrome 有何不同，以及 Agent 浏览器为什么更快更顺手。",
  alternates: { canonical: "https://danghb.cn/notes/ego-browser/" },
};

const facts = [
  ["基于 Chromium，可一键迁移 Chrome", "ego (lite) 是 macOS 上基于 Chromium 的浏览器，首次启动可迁移 Chrome 的登录态、Cookie、扩展和 Profile，用起来和 Chrome 一样。"],
  ["Agent 在独立 Space 里干活", "每个任务在一个 Task Space 里运行：有自己的标签页，继承用户登录态，但不和人抢同一个窗口。"],
  ["一次脚本、多步执行", "Agent 写一段 Node.js heredoc，把打开、读取、点击、填写、等待组合在一起，由 ego-browser 一次跑完，而不是 Playwright/Puppeteer 那样一步一个往返。"],
  ["语义快照 + 稳定引用", "页面以语义树快照给到 Agent，官方称比 HTML 更省 token；元素用 @N 引用，类名变化时仍稳定，不依赖坐标。"],
  ["Playwright 风格 API + CDP", "预置 page、locator、browser、taskSpaces、fetch、cdp 等接口，底层通过 Chrome DevTools Protocol 驱动真实 Chromium 会话。"],
  ["自动接入主流 Agent", "首次启动会把 ego-browser skill 写入 ~/.agents/skills 与 ~/.claude/skills，Claude Code、Codex、Cursor 等输入 /ego-browser 即可使用。"],
];

const reasons = [
  ["少往返", "每一步都要「截图/读页面 → 模型思考 → 下一个动作」。把多步合成一个脚本执行，模型调用次数和等待时间都会明显减少。"],
  ["少读图", "读结构化快照、按元素引用操作，比看截图找坐标更快，也更不容易点错。"],
  ["少登录", "直接复用真实登录态，验证码、2FA、SSO 跳转这类卡点大多在人日常使用时已经过掉了。"],
  ["不抢屏", "Agent 在自己的 Space 里并行开标签页，人照常用浏览器；普通 Chrome 往往需要另开调试端口、单独 Profile。"],
];

const sources = [
  ["ego (lite) 官网", "https://lite.ego.app/"],
  ["Quick start 文档", "https://lite.ego.app/document/en/docs/quick-start"],
  ["ego-browser 文档", "https://lite.ego.app/document/en/docs/ego-browser"],
  ["GitHub：citrolabs/ego-lite SKILL.md", "https://github.com/citrolabs/ego-lite/blob/main/skills/ego-browser/SKILL.md"],
];

export default function Page() {
  return (
    <>
      <Header lang="zh" current="/" />
      <main id="main">
        <section className="shell hero">
          <p className="hero-spine">调研笔记 · 2026-10-14</p>
          <div>
            <p className="kicker">Agent Browser / ego (lite)</p>
            <h1>为什么 ego 浏览器比 Chrome 更适合 Agent</h1>
            <p className="lede">
              结论先说：快，主要不是浏览器内核更快——ego 本身就是 Chromium——而是它把「Agent 怎么用浏览器」这件事重新设计了：少往返、少读图、少登录、不抢屏。
            </p>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>它是什么（已核实）</h2>
            <p className="section-note">以下内容均来自官方网站、文档与开源仓库，见文末来源。</p>
          </div>
          <div className="grid-3">
            {facts.map(([title, body], i) => (
              <article className="card" key={title}>
                <p className="card-index">{String(i + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>为什么更快、更顺手（分析）</h2>
            <p className="section-note">这部分是我对 Agent 浏览器的一般性判断，不是官方测评数据。</p>
          </div>
          <div className="work-list">
            {reasons.map(([tag, body]) => (
              <article className="work-item" key={tag}>
                <p className="work-year">{tag}</p>
                <div><p>{body}</p></div>
                <p className="work-tag">分析</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>需要注意</h2>
          </div>
          <div className="prose">
            <p>目前只支持 macOS。迁移数据时要输入系统密码，官方建议给 Agent 开「完全访问」权限以便启动浏览器——这意味着 Agent 能用你的真实登录态，权限边界要自己把握。</p>
            <p>官方没有公布与 Chrome 的定量速度对比，本文不引用任何跑分。</p>
          </div>
        </section>

        <section className="shell section">
          <div className="section-head">
            <h2>来源</h2>
            <Link className="btn ghost" href="/">返回主页</Link>
          </div>
          <div className="prose">
            {sources.map(([name, url]) => (
              <p key={url}><a href={url} target="_blank" rel="noreferrer">{name}</a> — {url}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
