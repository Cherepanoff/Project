module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  // overrides: [
  //   {
  //     env: {
  //       node: true,
  //     },
  //     files: [".eslintrc.{js,cjs}"],
  //     parserOptions: {
  //       sourceType: "script",
  //     },
  //   },
  // ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "i18next", "@typescript-eslint","react-hooks"],
  rules: {
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
    "typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "no-unused-vars": "error",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "no-tabs": ["error", { allowIndentationTabs: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides : [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ]
};
