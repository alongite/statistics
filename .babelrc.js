module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": {
                    "version": 3,
                    "proposals": true
                }
            }
        ],
        "@babel/typescript"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/proposal-class-properties"
    ]
}