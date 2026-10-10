import { pageMetadata } from "../../../i18n";
import { WorkView } from "../../../views/WorkView";

export const metadata = pageMetadata(
  "en",
  "/work",
  "Work — Hobson",
  "Hobson's work in enterprise AI, agent engineering, data and databases.",
);

export default function Page() {
  return <WorkView lang="en" />;
}
