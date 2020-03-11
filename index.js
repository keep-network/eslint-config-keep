"use strict"

module.exports = {
  extends: ["google", "prettier"],

  plugins: ["no-only-tests", "prettier"],

  rules: {
    "new-cap": [
      "error",
      {
        capIsNewExceptions: ["BN"]
      }
    ],

    "require-jsdoc": 0,

    "no-only-tests/no-only-tests": "error",
    "prettier/prettier": ["error", { semi: false }]
  },
}
