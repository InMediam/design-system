---
"@inmediam/ui": major
---

Consolidate the semantic color token scale, retune the dark theme, and make the floating Sheet the default.

### Why

`6.0.0` shipped the semantic token system, but it kept a long tail of `-alt`, `-hover`, `-on-brand`
and `-primary`/`-secondary` duplicates that never had a consistent meaning across families: some
`*-hover` tokens resolved to the same value as their base, `bg-error-primary` was a subtle surface
while `bg-brand-primary` was a solid fill, and the dark theme reused light-theme steps that failed
contrast. The scale is now uniform — each family exposes only the steps it actually needs, ordered
`primary → secondary → tertiary → quaternary → quinary`, with `*-solid` reserved for values that do
not invert in dark mode.

### Breaking changes

**Removed tokens and utilities**

| Removed | Use instead |
| --- | --- |
| `bg-brand` | `bg-brand-quinary` |
| `bg-brand-hover` | `bg-brand-quinary` (there is no hover step) |
| `bg-brand-primary-alt` | `bg-brand-primary` |
| `bg-brand-section`, `bg-brand-section-subtle` | `bg-brand-secondary` |
| `bg-primary-alt` | `bg-primary` |
| `bg-primary-hover` | `bg-secondary` |
| `bg-secondary-alt` | `bg-secondary` |
| `bg-secondary-solid` | `bg-quinary` |
| `bg-error-primary` | `bg-error-secondary` |
| `bg-error-hover` | `bg-error` |
| `bg-warning-primary` | `bg-warning-secondary` |
| `bg-success-primary` | `bg-success-secondary` |
| `text-secondary-on-brand`, `text-tertiary-on-brand`, `text-quaternary-on-brand` | `text-primary-on-brand` |
| `text-tertiary-hover` | `text-tertiary` |
| `text-error-primary-hover` | `text-error-primary` |
| `text-brand-secondary-hover` | `text-brand-secondary` |
| `text-brand-tertiary-alt` | `text-brand-tertiary` |
| `border-brand-alt` | `border-brand` (or `border-brand-solid` when the amber must stay vivid in dark) |
| `border-error-subtle` | `border-error` |
| `border-secondary-alt` | `border-secondary` |

The CSS custom properties behind each of these (`--bg-brand`, `--bg-primary-hover`,
`--text-tertiary-hover`, `--border-brand-alt`, …) were removed from `global.css` as well, so any
consumer reading them directly — inline styles, chart configs, `hsl(var(--bg-brand))` — needs the
same substitution.

**Shadcn alias remapped** — `--primary` now points at `--bg-brand-quinary` instead of `--bg-brand`.
Anything built on `bg-primary`/`text-primary-foreground` keeps working; overriding `--bg-brand` no
longer has any effect.

**`Sheet` default side changed** — `SheetContent` gained a `default` side (a floating panel inset
from the right and top, bordered on all four edges) and that is now the default value. Every
`<SheetContent>` rendered without an explicit `side` changes appearance. Pass `side="right"` to keep
the previous full-height, edge-anchored panel.

**`react` and `react-dom` are now peer dependencies** (`^18.2.0`). Installs that relied on the
hoisted copy from `@inmediam/ui`'s own dependency tree must declare React themselves.
`@storybook/addon-docs` and `@storybook/react` were also dropped from `dependencies` — they were
never needed at runtime, but anything importing them transitively through this package will break.

**Dark theme values retuned** (visual, not API): the `--fg-*` error/warning/success pairs each moved
one step lighter, `--text-brand-secondary` is amber again instead of gray, `--text-error-primary`,
`--bg-brand-primary`, `--bg-tertiary`, `--bg-primary-solid`, `--bg-error-secondary`,
`--bg-warning-secondary` and `--border-brand` were re-tuned for contrast. In light mode
`--text-primary-on-brand` softened from `0 0% 100%` to `0 0% 98%`.

### Added

- `text-error-secondary`, `text-warning-secondary`, `text-success-secondary` — the second text step
  each status family was missing.
- `bg-quinary` and `bg-brand-quinary` — the solid brand fill used by checkbox, radio, switch,
  slider, progress and calendar selection.
- `border-brand-solid` (amber that stays vivid in dark) and `border-success`; `--border-warning` now
  has a light-theme value.

### Component restyles

Badge (`destructive` and `success` variants now use the `*-secondary` surfaces with
`border-error`/no border), Button (`destructive` no longer has a hover step), Calendar
(`day_selected`), Checkbox, RadioGroup, Progress, Slider (thumb border), Sonner (action button),
Switch, Table (row hover is `bg-secondary`) and Dot (`outline` is `bg-quinary`) were all repointed at
the consolidated tokens.
