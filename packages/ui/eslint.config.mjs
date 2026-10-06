import prettier from '@inmediam/lint/prettier'
import config from '@inmediam/lint/react'

export default [
  { ignores: ['dist'] },
  ...config,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': ['error', {
        ignore: ['cmdk-input-wrapper'],
      }],
    },
  },
  ...prettier(),
]
