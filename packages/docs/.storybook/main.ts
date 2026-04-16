import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/stories/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }
    return config
  },
}

export default config
