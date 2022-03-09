module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSpacing: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
