module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', 'plugin:storybook/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)', 'src/components/**/*.vue', 'src/pages/**/*.vue', 'src/icons/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 0
    },
    env: {
      jest: true
    }
  }]
}
