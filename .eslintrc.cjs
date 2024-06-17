module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["dist", "node_modules", "vite.config.ts", "vitest.config.ts", ".eslintrc.cjs", "commitlint.config.cjs"],
    "plugins": ["simple-import-sort"],
    "rules": {
        "no-console": "warn",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "prefer-regex-literals": "off",
    }
}
