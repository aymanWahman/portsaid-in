{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", {
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": true
    }]
  },
  "overrides": [
    {
      "files": ["*.d.ts"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "off"
      }
    }
  ]
}