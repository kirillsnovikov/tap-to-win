module.exports = {
  // '*.{css,scss}': ['stylelint --max-warnings=5 --fix'],
  '*.{ts,tsx}': ['eslint --report-unused-disable-directives --max-warnings 0'],
  '*.{html,json,css,ts,tsx}': ['prettier --write'],
};
