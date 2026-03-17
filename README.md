<p align="center">
  <img src="https://inmediam.github.io/design-system/logo.png" alt="InMediam Design System" width="120" />
</p>

<h1 align="center">InMediam Design System</h1>

<p align="center">A React component library built to deliver consistent, accessible, and on-brand UI across InMediam products.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@inmediam/ui">
    <img src="https://img.shields.io/npm/v/@inmediam/ui.svg" alt="npm version" />
  </a>
  <a href="https://inmediam.github.io/design-system">
    <img src="https://img.shields.io/badge/storybook-live-ff4785?logo=storybook&logoColor=white" alt="Storybook" />
  </a>
  <a href="https://github.com/inmediam/design-system/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@inmediam/ui.svg" alt="license" />
  </a>
</p>

---

## Documentation

The full component documentation lives at **[inmediam.github.io/design-system](https://inmediam.github.io/design-system/?path=/docs/home--docs)**.

The Storybook covers every component with live, interactive examples, including props documentation, usage guidelines, theming tokens, and accessibility notes. It is automatically updated on every merge to `main`.

---

## Installation

```bash
npm install @inmediam/ui
```

> **Peer dependencies:** React 17+ and React DOM 17+ must already be installed in your project.

---

## Usage

Import components directly from the package:

```tsx
import { Button, Input, Modal } from '@inmediam/ui';

export function MyPage() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Get Started
    </Button>
  );
}
```

For theming, design tokens, and advanced configuration, see the [Storybook documentation](https://inmediam.github.io/design-system/?path=/docs/home--docs).

---

## Contributing

We welcome contributions of all kinds — bug fixes, new components, documentation improvements, and more.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to set up the project locally, follow our branching and PR conventions, write changesets, and get your changes merged and published.

---

## Changelog

See [CHANGELOG.md](./packages/ui/CHANGELOG.md) for a full history of releases.

---

## License

[MIT](./LICENSE)