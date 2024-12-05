module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm turbo run check-types',
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint ${filenames.join(' ')} --max-warnings=0`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],
};
