module.exports = {
  extends: [require.resolve('@inmediam/config/eslint/base.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
};