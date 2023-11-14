module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/button-has-type': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'warn',
      { endOfLine: 'auto' },
    ],
  },
};
