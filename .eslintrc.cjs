module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    // 'eslint:recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    // "@typescript-eslint/no-non-null-assertion": "error",
    '@typescript-eslint/no-unused-vars': 'error',
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "error",
    'no-console': 'warn',
  },

  // settings: {
  //   react: {
  //     version: "detect",
  //   },
  // },
};
