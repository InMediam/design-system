# InMediam Design System

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `workshop`: a Storybook app with the `ui` package imported
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications with [shadcn-ui](https://github.com/shadcn/ui) already included. 
- `ui/eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `ui/tailwind-config`: reusable tailwind configuration
- `ui/tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tokens`: design tokens including colors, fonts, font sizes, font weights, line heights, radii and spacing values

## Install

Run the following command:

```sh
pnpm install
npm run dev
```
