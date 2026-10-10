import { pageMetadata } from "../../../i18n";
import { AboutView } from "../../../views/AboutView";

export const metadata = pageMetadata(
  "en",
  "/about",
  "About — Hobson",
  "About Hobson: an enterprise AI and data solutions architect focused on agent engineering, cloud databases and enterprise AI transformation.",
);

export default function Page() {
  return <AboutView lang="en" />;
}
