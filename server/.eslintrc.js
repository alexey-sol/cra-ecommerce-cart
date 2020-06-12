module.exports = {
    env: {
        es6: true,
        node: true
    },

    extends: [
        "airbnb-base"
    ],

    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },

    ignorePatterns: ["node_modules/"],

    parser: "babel-eslint",

    parserOptions: {
        allowImportExportEverywhere: false,
        codeFrame: true,
        sourceType: "module"
    },

    rules: {
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "camelcase": 0,
        "class-methods-use-this": 0,
        "comma-dangle": ["error", "never"],
        "consistent-return": 0,
        "function-paren-newline": 0,
        "import/prefer-default-export": 0,
        "import/order": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-await-in-loop": 0,
        "no-confusing-arrow": 0,
        "no-restricted-syntax": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": 0,
        "quote-props": 0,
        "quotes": [2, "double"],
        "max-len": ["error", { "code": 90 }],
        "no-console": 0,
        "space-before-function-paren": ["error", "always"]
    },

    settings: {
        "import/resolver": {
            alias: {
                extensions: [".js"],
                map: [
                    ["@api", "./src/api"],
                    ["@config", "./src/config"],
                    ["@loaders", "./src/loaders"],
                    ["@logger", "./src/loaders/logger"],
                    ["@root", "./"],
                    ["@services", "./src/services"],
                    ["@utils", "./src/utils"]
                ]
            }
        }
    }
};
