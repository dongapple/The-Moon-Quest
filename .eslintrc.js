module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: '.eslintrc.js',
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['warn'],
    'no-console': 'warn',
    'prettier/prettier': 'error',
  },
};
