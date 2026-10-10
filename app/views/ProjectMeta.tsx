import type { Lang } from "../i18n";
import type { PublicProject } from "../content/github";

export function ProjectMeta({ project, lang }: { project: PublicProject; lang: Lang }) {
  const updated = lang === "zh" ? `更新于 ${project.pushedAt}` : `Updated ${project.pushedAt}`;
  return (
    <p className="work-meta">
      <time dateTime={project.pushedAt}>{updated}</time>
      {project.stars > 0 ? <span>★ {project.stars}</span> : null}
    </p>
  );
}
