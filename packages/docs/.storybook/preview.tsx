import '@inmediam/ui/styles'

import { withThemeByClassName } from '@storybook/addon-themes'
import React, { useEffect } from 'react'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disabled: true,
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
    (Story: React.ComponentType) => {
      useEffect(() => {
        document.body.style.backgroundColor = 'hsl(var(--background))'
      })
      return <Story />
    },
  ],
}

export default preview
