---
"@inmediam/ui": patch
---

Publish `dist/` again. Since 8.0.0 the tarball shipped without it, because npm now applies the monorepo root `.gitignore` (which ignores `dist`) to workspace packages. The Tailwind preset scans `node_modules/@inmediam/ui/dist/**/*.js` for class names, so apps on 8.0.0 stopped generating the classes used only by `@inmediam/ui` components.

`package.json` now declares `files`, which npm never excludes: `dist`, `src`, `tailwind.config.js`, `postcss.config.js` and `CHANGELOG.md`. Config files that were never meant to be published (`eslint.config.mjs`, `tsup.config.ts`, `tsconfig.tsbuildinfo`, `components.json`) are left out.
