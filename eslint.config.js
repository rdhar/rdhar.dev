import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
  {
    ignores: [
      ".astro/**",
      ".github/**",
      ".vscode/**",
      "dist/**",
      "node_modules/**",
      "public/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      semi: ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  ...astro.configs["flat/recommended"],
  ...astro.configs["flat/jsx-a11y-recommended"],
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
];
