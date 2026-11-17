import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint"
import turboPlugin from "eslint-plugin-turbo"
import eslintConfigPrettier from "eslint-config-prettier";

export const config = defineConfig(
    globalIgnores(["dist/**", "build/**", "coverage/**"]),

    {
        files: ["**/*.{js,mjs,cjs,jsx,ts,tsx, mts, cts}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended
        ]
    },
    {
        plugins: {
            turbo: turboPlugin
        },
        rules: {
            "turbo/no-undeclared-env-vars": "warn"
        }
    },

    eslintConfigPrettier
)