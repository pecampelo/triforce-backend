module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'padded-blocks': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // eslint-disable-next-line quote-props
    'camelcase': 'off',
    'no-constant-condition': 'off',
    'consistent-return': 'off',
    'import/export': 'off',

  },
};
