module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "plugin:react/recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "enforceForRenamedProperties": "enable",
    "react/prop-types": [
        "enabled",
        { "ignore": "ignore", "customValidators": "customValidator"  , "skipUndeclared": "skipUndeclared"}
      ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};