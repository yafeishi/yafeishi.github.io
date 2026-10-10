// Snapshot of public data from https://github.com/yafeishi, refreshed by hand.
export const GITHUB_SYNCED_AT = "2026-10-10";

export const githubProfile = {
  login: "yafeishi",
  url: "https://github.com/yafeishi",
  bio: "Oracle / PostgreSQL / TDSQL",
  publicRepos: 36,
  followers: 31,
};

export type PublicProject = {
  name: string;
  href: string;
  language: string;
  stars: number;
  pushedAt: string;
  tag: string;
  summary: { zh: string; en: string };
};

export const publicProjects: PublicProject[] = [
  {
    name: "ai-time-guard",
    href: "https://github.com/yafeishi/ai-time-guard",
    language: "Python",
    stars: 0,
    pushedAt: "2026-10-08",
    tag: "macOS / Python",
    summary: {
      zh: "本地优先的 macOS 菜单栏工具，按实际活跃时间统计多种 AI 编程工具的使用，提供每日限额、趋势仪表盘和分享卡片。",
      en: "A local-first macOS menu bar app that tracks and limits the time you actually spend in AI coding tools, with daily limits, a trends dashboard and shareable cards.",
    },
  },
  {
    name: "video-maker",
    href: "https://github.com/yafeishi/video-maker",
    language: "JavaScript",
    stars: 0,
    pushedAt: "2026-10-02",
    tag: "Video / Node.js",
    summary: {
      zh: "用代码导演和渲染短片：每部片是一个网页，无头 Chrome 逐帧截图，配音、配乐、字幕跟着同一条时间线，最后 ffmpeg 出片；附一个浏览器里的工作台。",
      en: "Direct and render short films in code: each film is a web page captured frame by frame in headless Chrome, with voice-over, music and subtitles on one timeline and ffmpeg doing the final cut. Comes with a browser-based studio.",
    },
  },
  {
    name: "herdr-session-history",
    href: "https://github.com/yafeishi/herdr-session-history",
    language: "Python",
    stars: 0,
    pushedAt: "2026-09-20",
    tag: "Herdr / Plugin",
    summary: {
      zh: "Herdr 的按 pane 会话历史栏：列出当前 agent 会话的用户轮次，点击即可跳回 Grok 滚动区对应提示。每个 pane 各自一份历史，关 pane 时栏也一起关掉。",
      en: "A per-pane conversation history rail for Herdr. It lists the turns in the current agent session and jumps Grok's scrollback to the prompt you pick. Each pane keeps its own history, and the rail closes with the pane.",
    },
  },
  {
    name: "content-publisher",
    href: "https://github.com/yafeishi/content-publisher",
    language: "TypeScript",
    stars: 0,
    pushedAt: "2026-09-10",
    tag: "Next.js / AI",
    summary: {
      zh: "面向个人创作者的本地内容工作台，连接 AI 起稿、素材、排版、多平台发布和 Obsidian。",
      en: "A local content workspace for solo creators that ties together AI-assisted drafting, assets, layouts, multi-platform publishing and Obsidian.",
    },
  },
  {
    name: "taixin-monitor",
    href: "https://github.com/yafeishi/taixin-monitor",
    language: "Python",
    stars: 0,
    pushedAt: "2026-09-10",
    tag: "Health Data / Python",
    summary: {
      zh: "本地部署的胎心监护（CTG/NST）辅助分析与记录系统，包含规则引擎、历史记录、趋势标注和 Docker/NAS 部署。",
      en: "A self-hosted assistant for fetal heart monitoring (CTG/NST): analysis, records and trend annotations, driven by a rules engine and deployable on Docker or a NAS.",
    },
  },
  {
    name: "wecom-keepalive",
    href: "https://github.com/yafeishi/wecom-keepalive",
    language: "Swift",
    stars: 0,
    pushedAt: "2026-09-10",
    tag: "macOS / Swift",
    summary: {
      zh: "一个不联网的 macOS Swift 小工具，在空闲一段时间、明确倒计时后模拟一像素的鼠标移动。",
      en: "A small, offline macOS utility in Swift that nudges the mouse by one pixel after a visible countdown once you've been idle.",
    },
  },
  {
    name: "apple-tv-controller",
    href: "https://github.com/yafeishi/apple-tv-controller",
    language: "HTML",
    stars: 0,
    pushedAt: "2026-09-10",
    tag: "macOS / Python",
    summary: {
      zh: "运行在 macOS 上的本地 Apple TV Web 遥控器，支持发现、配对和常用播放控制。",
      en: "A local web remote for Apple TV that runs on macOS, with device discovery, pairing and everyday playback controls.",
    },
  },
];
