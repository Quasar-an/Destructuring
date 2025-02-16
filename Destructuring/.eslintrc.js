module.exports = {
  extends: 'airbnb-base',
  rules: {
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'no-undef': 'error',
  },
  env: {
    jest: true,
    node: true,
  },
};
