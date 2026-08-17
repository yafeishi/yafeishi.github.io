import type { NextConfig } from "next";

function pagesBasePath() {
  if (process.env.PAGES_BASE_PATH !== undefined) {
    return process.env.PAGES_BASE_PATH;
  }

  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    return "";
  }

  const [owner, name] = repository.split("/");
  if (!owner || !name || name === `${owner}.github.io`) {
    return "";
  }

  return `/${name}`;
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: pagesBasePath(),
};

export default nextConfig;
