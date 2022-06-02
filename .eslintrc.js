module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "json-format"],
  extends: [
    "sonarqube",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "require-await": 0,
    "jest/prefer-to-be-null": 0,
    "jest/prefer-to-be-undefined": 0,
  },
  ignorePatterns: ["coverage/", "dist/", "node_modules/"],
};
