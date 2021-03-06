'use strict';

module.exports = {
  env: {
    es6: true,
    mocha: true,
    node: true,
  },
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(require.resolve),
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'func-names': 0,
        'prefer-arrow-callback': 0,
      },
    },
  ],
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['jsdoc'],
  rules: {
    camelcase: [2, {properties: 'always'}],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {after: true, before: false}],
    'consistent-return': 0,
    eqeqeq: 2,
    'jsdoc/check-param-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/newline-after-description': [2, 'never'],
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-hypen-before-param-description': 0,
    'jsdoc/require-param': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-returns-type': 2,
    'new-cap': [2, {newIsCap: true}],
    'no-bitwise': 0,
    'no-caller': 1,
    'no-console': 2,
    'no-continue': 0,
    'no-control-regex': 0,
    'no-invalid-regexp': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-undef': 1,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, {args: 'after-used', vars: 'local'}],
    'no-use-before-define': 1,
    'prefer-template': 2,
    'require-jsdoc': [
      2,
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          FunctionDeclaration: true,
          FunctionExpression: false,
          MethodDefinition: true,
        },
      },
    ],
    'require-yield': 0,
    'sort-keys': [2, 'asc', {caseSensitive: true, natural: true}],
    strict: [2, 'global'],
  },
};
