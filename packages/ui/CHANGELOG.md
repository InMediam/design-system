# @inmediam/ui

## 7.0.1

### Patch Changes

- dc1b15f: Fix the CarouselDots components adding the ref parameter to work with React.forwardRef

## 7.0.0

### Major Changes

- a63154c: Consolidate the semantic color token scale, retune the dark theme, and make the floating Sheet the default.

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

  | Removed                                                                         | Use instead                                                                     |
  | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
  | `bg-brand`                                                                      | `bg-brand-quinary`                                                              |
  | `bg-brand-hover`                                                                | `bg-brand-quinary` (there is no hover step)                                     |
  | `bg-brand-primary-alt`                                                          | `bg-brand-primary`                                                              |
  | `bg-brand-section`, `bg-brand-section-subtle`                                   | `bg-brand-secondary`                                                            |
  | `bg-primary-alt`                                                                | `bg-primary`                                                                    |
  | `bg-primary-hover`                                                              | `bg-secondary`                                                                  |
  | `bg-secondary-alt`                                                              | `bg-secondary`                                                                  |
  | `bg-secondary-solid`                                                            | `bg-quinary`                                                                    |
  | `bg-error-primary`                                                              | `bg-error-secondary`                                                            |
  | `bg-error-hover`                                                                | `bg-error`                                                                      |
  | `bg-warning-primary`                                                            | `bg-warning-secondary`                                                          |
  | `bg-success-primary`                                                            | `bg-success-secondary`                                                          |
  | `text-secondary-on-brand`, `text-tertiary-on-brand`, `text-quaternary-on-brand` | `text-primary-on-brand`                                                         |
  | `text-tertiary-hover`                                                           | `text-tertiary`                                                                 |
  | `text-error-primary-hover`                                                      | `text-error-primary`                                                            |
  | `text-brand-secondary-hover`                                                    | `text-brand-secondary`                                                          |
  | `text-brand-tertiary-alt`                                                       | `text-brand-tertiary`                                                           |
  | `border-brand-alt`                                                              | `border-brand` (or `border-brand-solid` when the amber must stay vivid in dark) |
  | `border-error-subtle`                                                           | `border-error`                                                                  |
  | `border-secondary-alt`                                                          | `border-secondary`                                                              |

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

### Minor Changes

- ac0bf4d: Add the `2xl` (1536px) breakpoint to the Tailwind preset. The preset defines `screens` outside of `extend`, which replaced Tailwind's default scale and left `xl` (1280px) as the largest named breakpoint — consumers targeting wide monitors had to fall back to arbitrary variants such as `min-[1600px]:`. `2xl` now restores Tailwind's own default value.

## 6.0.1

### Patch Changes

- Refine dark theme component colors and contrast:

  - Update Badge colors and Dot styling
  - Improve Table hover state
  - Fix Tooltip contrast and styling
  - Improve contrast for Tooltip, AvatarFallback, and required Label
  - Use a subtler focus ring (`--ring` now derives from `border-primary` instead of `border-brand`)

## 6.0.0

### Major Changes

- Introduces dark mode and a new semantic color token system.

  ### What changed

  - Added a `.dark` theme and full dark-mode coverage across every UI primitive (button, input, dialog,
    calendar, table, sonner, tooltip, etc.).
  - Replaced the flat primitive palette (`--gray-*`, `--brand-*`, `--error-*`, `--warning-*`, `--success-*`)
    with a semantic token system scoped by usage: `--text-*`, `--fg-*`, `--bg-*`, `--border-*`.
  - Restructured `tailwind.config.js` so each utility family (`text-`, `bg-`, `border-`, `ring-`, `fill-`,
    `stroke-`) gets its own token map. This means `text-primary` and `bg-primary` can now resolve to
    **different** variables without colliding.
  - Shadcn aliases (`--background`, `--foreground`, `--primary`, `--border`, `--ring`, etc.) are preserved and
    re-point at the new semantic tokens, so existing shadcn-based primitives keep working.

  ### Why

  The previous palette mixed primitive scales (`gray-500`) with semantic aliases (`primary`, `muted`) in a
  single flat namespace, which made dark mode impossible without rewriting every component. The new system
  separates intent (text vs. background vs. border) from raw color, allowing a single class like `bg-primary`
  to mean different things in light and dark themes and unblocking theming across the design system.

  ### How to migrate

  - Wrap your app or any subtree you want themed with `class="dark"` to opt into dark mode.
  - Replace primitive utility usages with semantic equivalents:
    - `text-gray-700`, `text-gray-500` → `text-primary` / `text-secondary` / `text-tertiary` /
      `text-quaternary`
    - `bg-gray-50`, `bg-gray-100` → `bg-primary` / `bg-secondary` / `bg-tertiary`
    - `border-gray-200` → `border-secondary` (or `border-primary` / `border-tertiary`)
    - `text-brand-600`, `bg-brand-500` → `text-brand-primary` / `bg-brand-quinary`
    - `bg-error-500`, `text-error-600` → `bg-error` / `text-error-primary`
    - Equivalent mappings exist for `warning-*` and `success-*`.
  - For icons and other `currentColor` glyphs, use the `text-fg-*` family (`text-fg-primary`,
    `text-fg-brand-primary`, etc.) instead of `text-gray-*`.
  - Shadcn-style classes (`bg-background`, `text-foreground`, `border-border`, `ring-ring`, `bg-card`,
    `text-muted-foreground`, `bg-destructive`) continue to work unchanged.

## 5.1.0

### Minor Changes

- add new components and update versions
- 3d46caa: Add ScrollArea, Sonner, DatePickerInput, Field, and InputGroup components

  - Add `ScrollArea` and `ScrollBar` components via `@radix-ui/react-scroll-area`
  - Add `Toaster` component (sonner) with next-themes dark/light mode integration
  - Add `DatePickerInput` component with Brazilian date format (dd/MM/yyyy), smart input mask with
    auto-advance cursor and auto-zero-pad — day first digit 4–9 pads to `0x` and jumps to month; month first
    digit 2–9 pads to `0x` and jumps to year
  - Add `Field` and `FieldLabel` layout wrapper components
  - Add `InputGroup`, `InputGroupInput`, `InputGroupAddon`, and `InputGroupButton` composition components for
    inputs with inline addons
  - Add `applyDateMask`, `formatMaskedDate`, and `parseMaskedDate` utility helpers in `lib/date-mask`,
    exported from package root

## 5.0.0

### Major Changes

- 085dd5f:
  [`054e15e`](https://github.com/InMediam/design-system/commit/054e15e527d68499f5dca96d3ca9258c75cfce5e)
  [#11](https://github.com/InMediam/design-system/pull/11) Remove TooltipProvider from SidebarProvider —
  consumers must provide TooltipProvider at app root when using SidebarMenuButton with tooltip

### Minor Changes

- 085dd5f:
  [`26eed3a`](https://github.com/InMediam/design-system/commit/26eed3aa287312e7e973535e7c3cb1316304b6c6)
  [#11](https://github.com/InMediam/design-system/pull/11) Improve Dialog responsiveness on mobile (full
  width, no border radius)
- 085dd5f:
  [`d0ec617`](https://github.com/InMediam/design-system/commit/d0ec617641af9baa2f269c4df277ea6bc9b5cac3)
  [#11](https://github.com/InMediam/design-system/pull/11) Add MobileTabList component
- 085dd5f:
  [`dd8ecae`](https://github.com/InMediam/design-system/commit/dd8ecae8afa714070c1d19d0025f5426892e9cd6)
  [#11](https://github.com/InMediam/design-system/pull/11) Add dotSize prop to CarouselDots (1-5)

### Patch Changes

- 085dd5f:
  [`a234dfc`](https://github.com/InMediam/design-system/commit/a234dfc82992c7e8a368da2059c6fb34211710e9)
  [#11](https://github.com/InMediam/design-system/pull/11) Improve repository and NPM package documentation

## 4.2.1

### Patch Changes

- update mobile details

## 4.2.0

### Minor Changes

- Adiciona CarouselDots e atualiza layouts de Drawer e Popover

## 4.1.29

### Patch Changes

- Adiciona estilização tertiary para o Button

## 4.1.28

### Patch Changes

- Adiciona validação para não permitir data com anos +4 digitos

## 4.1.27

### Patch Changes

- Corrige focus do dropdown menu

## 4.1.26

### Patch Changes

- Altera cor do placeholder de input e select

## 4.1.25

### Patch Changes

- style para disabled da variant default

## 4.1.24

### Patch Changes

- Atualiza tamanho do texto no tooltip

## 4.1.23

### Patch Changes

- Padronização de estilos do button e tooltip

## 4.1.22

### Patch Changes

- Corrige espaçamento entre linha no texto da label

## 4.1.21

### Patch Changes

- Corrige cadaga colocada no componente de dialog no control

## 4.1.20

### Patch Changes

- fix dialog close

## 4.1.19

### Patch Changes

- Fix close do modal no modo dark

## 4.1.18

### Patch Changes

- Add hint text component

## 4.1.17

### Patch Changes

- Corrige espaçamento entre linhas na label

## 4.1.16

### Patch Changes

- Adiciona ícone de required na Label

## 4.1.15

### Patch Changes

- Adiciona package toggle group

## 4.1.14

### Patch Changes

- Atualização de bordas nos inputs e ícone de close no Dialog

## 4.1.13

### Patch Changes

- Corrige modo dark de componentes

## 4.1.12

### Patch Changes

- Borda da tabela

## 4.1.11

### Patch Changes

- corrige aplicação de borda na tabela

## 4.1.10

### Patch Changes

- Altera border radius dos inputs

## 4.1.9

### Patch Changes

- Atualização do ring dos inputs

## 4.1.8

### Patch Changes

- Atualiza radius do modal

## 4.1.7

### Patch Changes

- Atualiza background do fallback do avatar

## 4.1.6

### Patch Changes

- Atualiza estilo da tabela e input

## 4.1.5

### Patch Changes

- Atualiza altura header table

## 4.1.4

### Patch Changes

- Atualiza style da table

## 4.1.3

### Patch Changes

- Corrige script dev

## 4.1.2

### Patch Changes

- Add keywords to NPM

## 4.1.1

### Patch Changes

- Corrige problema com importação de configuração TS

## 4.1.0

### Major Changes

- Release

## 1.0.0

### Major Changes

- Release
