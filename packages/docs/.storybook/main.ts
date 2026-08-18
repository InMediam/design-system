import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/stories/**/*.stories.tsx',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-mcp'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  viteFinal: async (config, { configType }) => {
    const { default: react } = await import('@vitejs/plugin-react')

    config.plugins = [...(config.plugins ?? []), react()]

    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }

    return config
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
