const config = require("@inmediam/ui/tailwind")("docs")

config.content = [
    '../../packages/ui/src/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,mdx}',
    './.storybook/**/*.{ts,tsx}',
]

module.exports = config