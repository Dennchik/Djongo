import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    files: ['#src/**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules/**'], // Исключаем папку node_modules
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        ...globals.node, // Глобальные переменные для Node.js
        $: 'readonly', // Обозначаем $ как глобальную переменную
        global: true, // Отключаем предупреждение 'global' is not defined
      },
    },
  },
  {
    rules: {
      'no-mixed-spaces-and-tabs': 'off',
      semi: ['error', 'always'],
      quotes: [
        'warn',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'error',
    },
  },
  // Линтинг HTML файлов через плагин html
  {
    plugins: ['html'],
    overrides: [
      {
        files: ['**/*.html'],
        processor: 'html/html',
      },
    ],
  },
  {
    env: { node: true },
    files: ['.eslintrc.{js,jsx}'],
    parserOptions: { sourceType: 'script' },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
