import { pageMetadata } from "../../i18n";
import { HomeView } from "../../views/HomeView";

export const metadata = pageMetadata(
  "en",
  "/",
  "Hobson — Enterprise AI & Data Solutions Architect",
  "Hobson's personal site: enterprise AI transformation, agent engineering, cloud databases, reading and practice.",
);

export default function Page() {
  return <HomeView lang="en" />;
}
