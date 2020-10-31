module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: 'dist',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    camelcase: 'off'
  }
};
