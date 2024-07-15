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
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.config.ts', '**/*.config.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/function-component-definition': 0,
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
    'import/prefer-default-export': 0,
  },
};
