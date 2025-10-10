import { themes } from '@storybook/theming'
import { useEffect } from 'react'
import type { Decorator, Parameters } from '@storybook/react'

export const decorators: Decorator[] = [(Story, context) => {
  const theme = context.globals.theme || 'light'

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return <Story />
}]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
}

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FAFAFA' },
      { name: 'dark', value: '#090C10' },
    ],
  },
  docs: {
    theme: themes.dark,
  },
}
