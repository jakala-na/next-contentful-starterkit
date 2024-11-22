module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm turbo run check-types',
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],
};
