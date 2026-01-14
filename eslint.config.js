// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';


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
      globals: {
        ...globals.node, // ★ これが決定打
      },
      parserOptions: {
        // project: './tsconfig.json',
        project: ['./tsconfig.json'], // ★ 配列にする
        ecmaVersion: 2020,
        sourceType: 'module',
        // tsconfigRootDir: import.meta.dirname,
        tsconfigRootDir: process.cwd(), // ★ import.meta.dirname は使わない
      },
      rules: {
        // カスタムルール（そのまま移行）
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
  },
];
