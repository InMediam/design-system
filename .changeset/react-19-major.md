---
"@inmediam/ui": major
---

Require React 19, drop `React.forwardRef` from every component, and move the dependencies to their latest React 19 compatible versions.

### Why

React 19 passes `ref` as a regular prop, which makes `forwardRef` unnecessary. Several dependencies (`cmdk` 1.0, `react-day-picker` 8.10.1, `lucide-react` 0.330) still declared `react ^18` as a peer, so apps could not install React 19 alongside `@inmediam/ui`.

### Breaking changes

**React 19 only**

- `peerDependencies` are now `react ^19.0.0` and `react-dom ^19.0.0`. Upgrade the app (and `@types/react` / `@types/react-dom`) to 19 before installing this version.

**Components are plain function components**

- No component is wrapped in `React.forwardRef` anymore. `ref` is a regular prop and keeps working in JSX exactly as before.
- Props are typed with `React.ComponentProps<...>` instead of `React.ComponentPropsWithoutRef<...>` / `React.HTMLAttributes<...>`, so exported prop types such as `ButtonProps` now include `ref`.
- Code that relied on the `forwardRef` object shape (for example reading `Button.render`, or `React.ElementRef<typeof Button>`) must switch to `React.ComponentRef<typeof Button>` / the props type.

**Calendar on `react-day-picker` 10**

- `Calendar` now targets the v9/v10 API of `react-day-picker`. Props deprecated in v9 were removed upstream: use `startMonth` / `endMonth` instead of `fromMonth` / `toMonth` / `fromYear` / `toYear`, `hidden={{ before, after }}` instead of `fromDate` / `toDate`, and `autoFocus` instead of `initialFocus`.
- The `classNames` keys follow the new API (`month_caption`, `button_previous`, `button_next`, `month_grid`, `weekdays`, `weekday`, `week`, `day`, `day_button`, `selected`, `today`, `outside`, `range_end`...). Overrides written with the v8 keys (`caption`, `nav_button`, `head_cell`, `row`, `cell`, `day_selected`...) are ignored.
- `components.IconLeft` / `components.IconRight` were replaced by `components.Chevron`.
- `date-fns` moved from 3 to 4.

**Removed dependencies**

- `polished` and `tailwind-variants` were not used by any component and are no longer installed. Apps that imported them through `@inmediam/ui` must add them as their own dependencies.

### Dependency updates

| Package | Before | After |
| --- | --- | --- |
| `cmdk` | 1.0.0 | ^1.1.1 |
| `react-day-picker` | ^8.10.0 | ^10.0.2 |
| `date-fns` | ^3.6.0 | ^4.4.0 |
| `lucide-react` | ^0.330.0 | ^1.52.0 |
| `sonner` | ^1.7.4 | ^2.0.8 |
| `tailwind-merge` | ^1.14.0 | ^2.6.1 |
| `@radix-ui/*` | various | latest of the same major |
| `embla-carousel-react`, `input-otp`, `next-themes`, `class-variance-authority`, `clsx`, `tailwindcss-animate` | — | latest |

Tailwind CSS stays on 3.4 (`tailwind-merge` 3 requires Tailwind 4).
