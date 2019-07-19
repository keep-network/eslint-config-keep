'use strict'

module.exports = {
  extends: 'google',

  plugins: [
    'no-only-tests',
  ],

  rules: {
    'indent': ['error', 2],

    'new-cap': [
      'error',
      {
        'capIsNewExceptions': [
          'BN',
        ],
      },
    ],

    'object-curly-spacing': [
      'error',
      'always',
    ],

    'semi': [2, 'never'],

    'max-len': 0,
    'require-jsdoc': 0,

    'no-only-tests/no-only-tests': 'error',
  },
}
