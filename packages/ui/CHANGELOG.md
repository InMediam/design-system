# @inmediam/ui

## 6.0.0

### Major Changes

- Introduces dark mode and a new semantic color token system.

  ### What changed

  - Added a `.dark` theme and full dark-mode coverage across every UI primitive (button, input, dialog, calendar, table, sonner, tooltip, etc.).
  - Replaced the flat primitive palette (`--gray-*`, `--brand-*`, `--error-*`, `--warning-*`, `--success-*`) with a semantic token system scoped by usage: `--text-*`, `--fg-*`, `--bg-*`, `--border-*`.
  - Restructured `tailwind.config.js` so each utility family (`text-`, `bg-`, `border-`, `ring-`, `fill-`, `stroke-`) gets its own token map. This means `text-primary` and `bg-primary` can now resolve to **different** variables without colliding.
  - Shadcn aliases (`--background`, `--foreground`, `--primary`, `--border`, `--ring`, etc.) are preserved and re-point at the new semantic tokens, so existing shadcn-based primitives keep working.

  ### Why

  The previous palette mixed primitive scales (`gray-500`) with semantic aliases (`primary`, `muted`) in a single flat namespace, which made dark mode impossible without rewriting every component. The new system separates intent (text vs. background vs. border) from raw color, allowing a single class like `bg-primary` to mean different things in light and dark themes and unblocking theming across the design system.

  ### How to migrate

  - Wrap your app or any subtree you want themed with `class="dark"` to opt into dark mode.
  - Replace primitive utility usages with semantic equivalents:
    - `text-gray-700`, `text-gray-500` → `text-primary` / `text-secondary` / `text-tertiary` / `text-quaternary`
    - `bg-gray-50`, `bg-gray-100` → `bg-primary` / `bg-secondary` / `bg-tertiary`
    - `border-gray-200` → `border-secondary` (or `border-primary` / `border-tertiary`)
    - `text-brand-600`, `bg-brand-500` → `text-brand-primary` / `bg-brand` / `bg-brand-hover`
    - `bg-error-500`, `text-error-600` → `bg-error` / `text-error-primary`
    - Equivalent mappings exist for `warning-*` and `success-*`.
  - For icons and other `currentColor` glyphs, use the `text-fg-*` family (`text-fg-primary`, `text-fg-brand-primary`, etc.) instead of `text-gray-*`.
  - Shadcn-style classes (`bg-background`, `text-foreground`, `border-border`, `ring-ring`, `bg-card`, `text-muted-foreground`, `bg-destructive`) continue to work unchanged.

## 5.1.0

### Minor Changes

- add new components and update versions
- 3d46caa: Add ScrollArea, Sonner, DatePickerInput, Field, and InputGroup components

  - Add `ScrollArea` and `ScrollBar` components via `@radix-ui/react-scroll-area`
  - Add `Toaster` component (sonner) with next-themes dark/light mode integration
  - Add `DatePickerInput` component with Brazilian date format (dd/MM/yyyy), smart input mask with auto-advance cursor and auto-zero-pad — day first digit 4–9 pads to `0x` and jumps to month; month first digit 2–9 pads to `0x` and jumps to year
  - Add `Field` and `FieldLabel` layout wrapper components
  - Add `InputGroup`, `InputGroupInput`, `InputGroupAddon`, and `InputGroupButton` composition components for inputs with inline addons
  - Add `applyDateMask`, `formatMaskedDate`, and `parseMaskedDate` utility helpers in `lib/date-mask`, exported from package root

## 5.0.0

### Major Changes

- 085dd5f: [`054e15e`](https://github.com/InMediam/design-system/commit/054e15e527d68499f5dca96d3ca9258c75cfce5e) [#11](https://github.com/InMediam/design-system/pull/11) Remove TooltipProvider from SidebarProvider — consumers must provide TooltipProvider at app root when using SidebarMenuButton with tooltip

### Minor Changes

- 085dd5f: [`26eed3a`](https://github.com/InMediam/design-system/commit/26eed3aa287312e7e973535e7c3cb1316304b6c6) [#11](https://github.com/InMediam/design-system/pull/11) Improve Dialog responsiveness on mobile (full width, no border radius)
- 085dd5f: [`d0ec617`](https://github.com/InMediam/design-system/commit/d0ec617641af9baa2f269c4df277ea6bc9b5cac3) [#11](https://github.com/InMediam/design-system/pull/11) Add MobileTabList component
- 085dd5f: [`dd8ecae`](https://github.com/InMediam/design-system/commit/dd8ecae8afa714070c1d19d0025f5426892e9cd6) [#11](https://github.com/InMediam/design-system/pull/11) Add dotSize prop to CarouselDots (1-5)

### Patch Changes

- 085dd5f: [`a234dfc`](https://github.com/InMediam/design-system/commit/a234dfc82992c7e8a368da2059c6fb34211710e9) [#11](https://github.com/InMediam/design-system/pull/11) Improve repository and NPM package documentation

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
