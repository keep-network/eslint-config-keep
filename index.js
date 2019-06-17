'use strict';

module.exports = {
  extends: 'google',

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

    'require-jsdoc': 0,
  },
};
