/** @type {import('eslint').Linter.FlatConfig} */
import { next } from 'eslint-config-next';
import { ESLint } from 'eslint';

export default [
  ...next,
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': {
        rules: {
          '@typescript-eslint/no-unused-vars': ['error', {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          }],
        },
      },
    },
  },
  {
    files: ['*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
