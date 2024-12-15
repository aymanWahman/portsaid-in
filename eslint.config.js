/** @type {import('eslint').Linter.Config} */
import { next } from 'eslint-config-next';

export default {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: {
        '@typescript-eslint': {
          rules: {
            '@typescript-eslint/no-unused-vars': ['error', {
              varsIgnorePattern: '^_',
              argsIgnorePattern: '^_',
            }],
          },
        },
      },
    },
  ],
  ...next,
};
