module.exports = {
  extends: [require.resolve('config/eslint/base.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
};