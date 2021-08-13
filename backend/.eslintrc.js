module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: [ "./tsconfig.json" ],
    },
    rules: {
        "semi": [2, "always"],
        "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
    },
    overrides: [
        {
            "files": ["*.ts"],
            "rules": {
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/comma-dangle": "off",
                "linebreak-style": "off",
                "import/no-cycle": "off",
                "prefer-destructuring": "off",
                "object-curly-newline": "off",
                "@typescript-eslint/lines-between-class-members": "off",
                "new-cap" : "off",
                "import/prefer-default-export": "off",
                "no-underscore-dangle": "off",
                "max-len": ["error", { "code": 140 }],
                "class-methods-use-this": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "arrow-body-style": "off",
            }
        }
    ]
}
