import { pageMetadata } from "../../i18n";
import { BooksView } from "../../views/BooksView";

export const metadata = pageMetadata(
  "zh",
  "/books",
  "书单 — Hobson",
  "Hobson 的公开书单：跑步、健康、数据库、工作与还在翻的书。",
);

export default function Page() {
  return <BooksView lang="zh" />;
}
