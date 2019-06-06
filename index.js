'use strict';

module.exports = {
  extends: 'google',

  rules: {
    'indent': ['error', 2],

    'max-len': [
      'error',
      {
        'code': 90,
        'ignoreStrings': true,
        'ignoreComments': true,
        'ignoreTemplateLiterals': true,
      },
    ],

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
