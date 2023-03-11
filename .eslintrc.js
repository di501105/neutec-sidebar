module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    // project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-standard',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/no-template-shadow': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
    'no-param-reassign': 0,
    'import/no-unresolved': [2, { ignore: ['@', './'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
