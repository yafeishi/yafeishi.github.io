#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${GH_TOKEN:-}" && -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Missing GH_TOKEN. Add a GitHub token with repo and pages scopes." >&2
  exit 1
fi

export GH_TOKEN="${GH_TOKEN:-$GITHUB_TOKEN}"

if ! gh auth status >/dev/null 2>&1; then
  echo "$GH_TOKEN" | gh auth login --with-token
fi

OWNER="$(gh api user --jq .login)"
REPO_NAME="${PAGES_REPO_NAME:-orcl-homepage}"
REPO="$OWNER/$REPO_NAME"

if ! gh repo view "$REPO" >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --description "Orcl Yafeishi personal homepage"
else
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/$REPO.git"
fi

git branch -M main
git push -u origin main

if ! gh api "repos/$REPO/pages" >/dev/null 2>&1; then
  gh api -X POST "repos/$REPO/pages" -f build_type=workflow >/dev/null
else
  gh api -X PUT "repos/$REPO/pages" -f build_type=workflow >/dev/null || true
fi

gh workflow run pages.yml --repo "$REPO" --ref main || true

echo "https://$OWNER.github.io/$REPO_NAME/"
