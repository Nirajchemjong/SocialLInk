import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
      // Common rules
      indent: ["error", 2], // Enforce 2-space indentation
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["error", "double"], // Enforce single quotes
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas where valid in ES5 (objects, arrays, etc.)
      "no-unused-vars": ["warn"], // Warn about unused variables
      "no-console": ["off"], // Allow console statements
      eqeqeq: ["error", "always"], // Enforce the use of === and !==
      "no-var": ["error"], // Disallow var and require let or const instead
      "prefer-const": ["error"], // Suggest using const if a variable is never modified
      "space-before-function-paren": ["error", "always"], // Enforce a space before function parenthesis
      "keyword-spacing": ["error", { before: true, after: true }], // Enforce consistent spacing before and after keywords
      "key-spacing": ["error", { beforeColon: false, afterColon: true }], // Enforce consistent spacing between keys and values in object literal properties
      "arrow-spacing": ["error", { before: true, after: true }], // Enforce consistent spacing before and after the arrow in arrow functions
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }], // Disallow multiple empty lines
    },
  },
  {
    ignores: ["client/**/*", "node_modules/**/*"],
  },
];
