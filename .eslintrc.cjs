module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:sonarjs/recommended-legacy',
    'plugin:security/recommended-legacy',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.config.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': 0,
    'react/require-default-props': [
      2,
      {
        ignoreFunctionalComponents: true,
      },
    ],
    'react/prop-types': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-template-expression': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@*/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['type'],
        groups: [['builtin', 'external'], 'internal', 'parent', 'type', ['sibling', 'index']],
      },
    ],
  },
};
