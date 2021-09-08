module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],

  plugins: ["vue"],

  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-unused-vars": "off",
    "prettier/prettier": ["error", { semi: false }],
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignores: ["nuxt-link", "div", "p", "h2"],
      },
    ],
    "vue/no-v-html": "off",
  },
}
