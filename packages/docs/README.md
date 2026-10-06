# @inmediam/docs

Storybook for `@inmediam/ui`, deployed to GitHub Pages by the `deploy-docs.yml` workflow.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts Storybook at `http://localhost:6006` |
| `npm run build` | Builds the static site into `storybook-static/` |
| `npm run lint` | ESLint with `@inmediam/lint`, failing on any warning |
| `npm run format` | Applies ESLint and the embedded Prettier fixes |

Stories live in `src/stories/` and import components straight from `@inmediam/ui`, which points to the source in `packages/ui/src`.
