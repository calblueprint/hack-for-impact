module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: [".jsx", ".tsx"],
      extends: ["plugin:react/recommended"],
      plugins: ["react"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "import/prefer-default-export": ["off"],
  },
  plugins: ["@typescript-eslint", "import"],
};
