module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'import/no-extraneous-dependencies': 'warn',
    semi: 'warn',
    indent: 'warn',
    'max-len': 'warn',
    'eol-last': 'warn',
    'comma-dangle': 'warn',
    'no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-trailing-spaces': 'warn',
    'space-before-blocks': 'warn',
    'object-curly-spacing': 'warn',
    'padded-blocks': 'warn',
    'no-useless-escape': 'warn',
    'arrow-body-style': 'warn',
    'no-unreachable': 'warn',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
