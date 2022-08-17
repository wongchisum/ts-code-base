module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 规则变动，防止import排序时划分成多组，用换行隔开
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    // 新增一条规则：这条规则防止在ts类型定义的时候出现no-unused-vars错误
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    /**禁止使用debugger语句 */
    'no-debugger': 'error',
    /**禁止使用console语句 */
    'no-console': 'error',
    /**新增规则，在变量和方法间需要换行 */
    'padding-line-between-statements': [
      'error',
      /**声明变量与return语句之间换行 */
      { blankLine: 'always', prev: 'const', next: 'return' },
      /**函数和return语句之间换行 */
      { blankLine: 'always', prev: 'function', next: 'return' },
      /**声明变量与函数之间换行 */
      { blankLine: 'always', prev: 'const', next: 'function' },
      /**函数之间换行 */
      { blankLine: 'always', prev: 'function', next: 'function' },
    ],
  },
}
