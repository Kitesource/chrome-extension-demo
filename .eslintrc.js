module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  globals: {
    chrome: 'readonly',
  },
  rules: {
    camelcase: 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'vue/no-v-html': 'off',
    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'implicit-arrow-linebreak': 'off',
  },
}
