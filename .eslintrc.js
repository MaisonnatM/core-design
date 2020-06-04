module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:react/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "react"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {},
    }
  },
  rules: {
    "jsx-quotes": ["warn", "prefer-double"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { vars: "all", args: "none", ignoreRestSiblings: true }
    ],
    "react/jsx-uses-react": 1,
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true
      }
    ]
  }
};
