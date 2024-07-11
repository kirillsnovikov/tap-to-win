module.exports = {
  // '*.{css,scss}': ['stylelint --max-warnings=5 --fix'],
  '*.{ts,tsx}': ['eslint --report-unused-disable-directives --max-warnings 1'],
  '*.{html,json,css,ts,tsx}': ['prettier --write'],
};
