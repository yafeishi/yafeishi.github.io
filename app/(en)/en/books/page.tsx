import { pageMetadata } from "../../../i18n";
import { BooksView } from "../../../views/BooksView";

export const metadata = pageMetadata(
  "en",
  "/books",
  "Reading list — Hobson",
  "Hobson's public reading list: running, health, databases, work, and books still in progress.",
);

export default function Page() {
  return <BooksView lang="en" />;
}
