const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    ...[
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/typescript',
      '@vercel/style-guide/eslint/react',
    ].map(require.resolve),
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    // WARNING: Convert errors to warnings for incremental migration
    'only-warn',
  ],
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
    tailwindcss: {
      callees: ['cn', 'cva'],
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  // add rules configurations here
  rules: {
    'import/no-default-export': 'off',
  },
};
