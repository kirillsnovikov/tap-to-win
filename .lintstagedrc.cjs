module.exports = {
  '*.{css,scss}': ['stylelint --max-warnings=0 --fix'],
  '*.{ts,tsx}': ['eslint --report-unused-disable-directives --max-warnings 0 --fix'],
  '*.{html,json,css,ts,tsx}': ['prettier --write'],
};
