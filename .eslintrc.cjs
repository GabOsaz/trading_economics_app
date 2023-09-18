module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  // 'import/extensions': [
  //   'error',
  //   'ignorePackages',
  //   {
  //     "": "never",
  //     js: 'never',
  //     jsx: 'never',
  //     ts: 'never',
  //     tsx: 'never',
  //   },
  // ],
  // 'import/extensions': [<severity />, 'never' | 'always' | 'ignorePackages'],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'eslint-plugin-react-hooks',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': [2, { props: false }],
  },
};
