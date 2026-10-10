import { pageMetadata } from "../../i18n";
import { AboutView } from "../../views/AboutView";

export const metadata = pageMetadata(
  "zh",
  "/about",
  "关于 — Hobson",
  "关于 Hobson：企业 AI 与数据解决方案架构师，关注 Agent 工程化、云数据库与企业 AI 转型。",
);

export default function Page() {
  return <AboutView lang="zh" />;
}
