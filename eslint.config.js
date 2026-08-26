import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/.astro/**",
      "**/dist/**",
      "**/.netlify/**",
      "**/.vercel/**",
      "**/.wrangler/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.{astro,js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
