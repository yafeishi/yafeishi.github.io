import { pageMetadata } from "../../i18n";
import { WorkView } from "../../views/WorkView";

export const metadata = pageMetadata(
  "zh",
  "/work",
  "实践 — Hobson",
  "Hobson 在企业 AI、Agent 工程化、数据与数据库方向的实践。",
);

export default function Page() {
  return <WorkView lang="zh" />;
}
