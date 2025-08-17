import astro from 'eslint-plugin-astro';

export default [
  // Astro files
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      // 緩和: 表示に影響しない簡易ルールのみ
      'no-debugger': 'error',
      'no-console': 'warn',
    },
  },
  // JS/TS
  {
    files: ['**/*.{js,ts,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        project: false,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      // 生成物やロックファイル
      '**/*.d.ts',
    ],
  },
];
