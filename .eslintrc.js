module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-console": "off",
    "global-require": "off",
    "no-use-before-define": ["error", "nofunc"],
    "no-restricted-imports": [2, { patterns: ["../*"] }],
    "import/no-unresolved": [2],
    "import/default": [0],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/interface-name-prefix": [2, { prefixWithI: "always" }],
    "@typescript-eslint/explicit-member-accessibility": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        directory: ".",
      },
    },
  },
  globals: {
    __DEV__: true,
  },
}
