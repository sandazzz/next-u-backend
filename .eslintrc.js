module.exports = {
  parserOptions: {
    ecmaVersion: 2023,
  },
  env: {
    node: true,
    es6: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'unicorn'
  ],
  rules: {
    'no-unused-vars': 1,
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'dot-notation': 'warn',
    'no-return-await': 'error',
    'guard-for-in': 'error',
    'prefer-const': 'warn',
    'prefer-promise-reject-errors': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/no-useless-undefined': 'error',
    'no-useless-catch': 'error',
    'no-multi-spaces': 'error',
    'no-invalid-this': 'error',
    'no-throw-literal': 'error',
    'no-useless-call': 'error',
    'no-extra-bind': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/empty-brace-spaces': 'warn',
    'no-extra-parens': 'warn',
    'no-var': 'warn',
  },
}