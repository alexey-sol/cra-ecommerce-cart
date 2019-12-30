module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },

  extends: [
    'standard'
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parserOptions: {
    ecmaVersion: 2018
  },

  rules: {
    "quotes": [2, "double"],
    "max-len": ["error", { "code": 80 }],
    "object-curly-spacing": [2, "never"],
    "semi": [2, "always", { "omitLastInOneLineBlock": true }]
  }
}
