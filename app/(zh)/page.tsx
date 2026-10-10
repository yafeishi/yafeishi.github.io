import { pageMetadata } from "../i18n";
import { HomeView } from "../views/HomeView";

export const metadata = pageMetadata(
  "zh",
  "/",
  "Hobson — 企业 AI 与数据解决方案架构师",
  "Hobson 的个人主页：企业 AI 转型、Agent 工程化、云数据库、阅读与实践。",
);

export default function Page() {
  return <HomeView lang="zh" />;
}
