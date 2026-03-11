# Contributing to InMediam Design System

Thank you for your interest in contributing! This document explains everything you need to know to get your changes into the project — from setting up your environment to getting your PR merged and published.

## Table of Contents

- [Repository Overview](#repository-overview)
- [Setting Up Locally](#setting-up-locally)
- [Branching Strategy](#branching-strategy)
- [Making Changes](#making-changes)
- [Writing a Changeset](#writing-a-changeset)
- [Opening a Pull Request](#opening-a-pull-request)
- [PR Review Process](#pr-review-process)
- [Release Process](#release-process)
- [Commit Conventions](#commit-conventions)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## Repository Overview

This is a monorepo managed with [Turborepo](https://turbo.build/repo) and npm workspaces.

```
design-system/
├── packages/
│   ├── ui/          # @inmediam/ui — the published component library
│   └── docs/        # Storybook documentation site
├── .changeset/      # Pending changeset files (created by contributors, consumed by CI)
├── .github/
│   └── workflows/
│       ├── release.yml       # Versions packages and publishes to npm on merge to main
│       └── deploy-docs.yml   # Deploys Storybook to GitHub Pages on merge to main
└── package.json
```

The source for all components lives in `packages/ui/src/`. The Storybook stories live in `packages/docs/`.

---

## Setting Up Locally

**Requirements:** Node.js 18+ and npm 9+.

1. Fork and clone the repository

```bash
git clone https://github.com/<your-username>/design-system.git
cd design-system
```

2. Install dependencies

```bash
npm install
```

3. Start Storybook

```bash
cd packages/docs
npm run dev
```

Storybook will be available at `http://localhost:6006`. It hot-reloads as you edit components.

4. Build all packages

```bash
npm run build
```

---

## Branching Strategy

Always create a branch from the latest `main`:

```bash
git checkout main
git pull origin main
git checkout -b feat/my-feature
```

Use the following prefixes for branch names:

| Prefix | Use for |
|--------|---------|
| `feat/` | New components or features |
| `fix/` | Bug fixes |
| `refactor/` | Refactoring without behavior changes |
| `docs/` | Documentation-only changes |
| `chore/` | Maintenance, dependencies, config |

Examples: `feat/tooltip-component`, `fix/button-disabled-state`, `docs/update-getting-started`.

---

## Making Changes

All components live in `packages/ui/src/`. When adding or modifying a component:

- **Component file:** `packages/ui/src/components/MyComponent/MyComponent.tsx`
- **Story file:** `packages/docs/src/stories/MyComponent.stories.tsx`
- **Exports:** make sure the component is exported from `packages/ui/src/index.ts`

When writing stories, follow the existing patterns in `packages/docs/src/stories/`. Each story should demonstrate the main variants and states of the component.

---

## Writing a Changeset

Every PR that modifies a package must include a changeset. A changeset is a short file that describes what changed and what kind of version bump it requires. It is what drives the automated release process.

Run this from the root of the repository:

```bash
npm run changeset
```

Follow the interactive prompts:

1. **Select the package(s) affected** — typically `@inmediam/ui`
2. **Choose the bump type:**
   - `patch` — bug fixes, internal refactoring, no API changes
   - `minor` — new components or features, backwards compatible
   - `major` — breaking changes to existing APIs or components
3. **Write a short summary** — this will appear in `CHANGELOG.md`. Write it in English, in the imperative mood, describing what changed from a consumer's perspective.

**Good changeset descriptions:**
```
Add Tooltip component with light and dark variants
Fix Button disabled state not applying correct cursor style
Add `size` prop to Avatar component
```

**Avoid:**
```
some changes
fix stuff
update
```

Commit the generated file in `.changeset/` together with your code changes.

> PRs without a changeset will not trigger a package release. This is fine for `docs/` or `chore/` changes, but required for any change that affects the published `@inmediam/ui` package.

---

## Opening a Pull Request

1. Push your branch to GitHub

```bash
git push origin feat/my-feature
```

2. Open a Pull Request against `main` on GitHub.

3. Fill in the PR description with:
   - **What changed** and why
   - A **screenshot or recording** if the change is visual
   - Any relevant **issue number** (e.g. `Closes #42`)

4. Make sure the changeset file is included in the PR diff (the `.changeset/*.md` file).

---

## PR Review Process

- A maintainer will review your PR and may request changes.
- CI will run automatically and must pass before merging.
- Once approved, a maintainer will merge the PR into `main`.
- The release process runs automatically after merge (see below).

**Please be patient.** We review PRs as quickly as we can. If a review is taking longer than expected, feel free to leave a comment on the PR.

---

## Release Process

Releases are fully automated. After a PR is merged into `main`:

1. The **Release GitHub Action** detects changeset files in `.changeset/`
2. It runs `changeset version`, which bumps `package.json` versions and generates `CHANGELOG.md` entries
3. It commits those changes back to `main`
4. It builds and publishes `@inmediam/ui` to npm

You do not need to manually bump versions, edit changelogs, or trigger any publish step.

---

## Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/). Each commit message should follow this format:

```
<type>(<scope>): <short description>
```

**Types:**

| Type | When to use |
|------|-------------|
| `feat` | A new component or feature |
| `fix` | A bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `docs` | Documentation only |
| `chore` | Build, tooling, config, or dependency updates |
| `test` | Adding or updating tests |

**Examples:**

```
feat(tooltip): add Tooltip component with dark and light modes
fix(button): resolve disabled cursor not applied on Safari
docs(readme): update installation instructions
chore(deps): update storybook to v8
```

Keep the subject line under 72 characters. Use the body for additional context when needed.

---

## Reporting Bugs

Open a [GitHub Issue](https://github.com/inmediam/design-system/issues/new) and include:

- A clear title describing the problem
- The component name and version of `@inmediam/ui` you're using
- Steps to reproduce the issue
- Expected vs actual behavior
- Browser/environment details if relevant
- A minimal reproduction (CodeSandbox or similar) if possible

---

## Suggesting Features

Open a [GitHub Issue](https://github.com/inmediam/design-system/issues/new) with the `enhancement` label and include:

- A description of the problem you're trying to solve
- What the proposed solution looks like
- Any alternatives you've considered

For large proposals (new component families, design system overhauls), consider starting a GitHub Discussion first to gather feedback before filing an issue.