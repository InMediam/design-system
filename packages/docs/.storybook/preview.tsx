import '@inmediam/ui/styles'

import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { useEffect } from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => {
      useEffect(() => {
        document.body.style.backgroundColor = 'hsl(var(--background))'
      })
      return <Story />
    },
  ],
}

export default preview
