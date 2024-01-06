module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0
  },
};
