// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';


export default [
  // 無視対象（旧 ignorePatterns）
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // JS 推奨ルール
  js.configs.recommended,

  // TypeScript 推奨ルール（型チェックなし）
  ...tseslint.configs.recommended,

  // TypeScript + 型チェックあり（旧 recommended-requiring-type-checking）
  ...tseslint.configs.recommendedTypeChecked,

  // プロジェクト固有設定
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      // カスタムルール（そのまま移行）
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
