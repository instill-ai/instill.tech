module.exports = {
  root: true,
  extends: ["@instill-ai/eslint-config-cortex"],
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "@next/next/no-img-element": "off",
  },
};
