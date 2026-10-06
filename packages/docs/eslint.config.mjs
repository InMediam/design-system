import prettier from '@inmediam/lint/prettier'
import config from '@inmediam/lint/react'
import storybook from 'eslint-plugin-storybook'

export default [
  { ignores: ['dist', 'storybook-static'] },
  ...config,
  ...storybook.configs['flat/recommended'],
  {
    // Configs do Tailwind e do PostCSS continuam em CommonJS.
    files: ['*.config.{js,cjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  ...prettier(),
]
