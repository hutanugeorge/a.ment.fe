const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    'plugin:eslint-comments/recommended',
  ],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [path.resolve('./tsconfig.json')],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [path.resolve('tsconfig.json')],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'deprecation',
    'simple-import-sort',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    '@typescript-eslint/no-empty-function': ['error'],
    'no-underscore-dangle': ['off'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    'no-unused-vars': ['error'],
    'no-useless-escape': ['error'],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unsafe-member-access': ['warn'],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    '@typescript-eslint/no-unsafe-call': ['warn'],
    '@typescript-eslint/no-unsafe-argument': ['warn'],
    'class-methods-use-this': ['off'],
    'max-classes-per-file': ['off'],
    'simple-import-sort/imports': ['error'],
    'import/extensions': ['off'],
    'no-param-reassign': ['off'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.spec.ts', '**/*.e2e-spec.ts'] },
    ],
    'import/prefer-default-export': ['off'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },
};
