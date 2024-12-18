module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm turbo run check-types',
  '**/*.(ts|tsx|js)': (filenames) => [`pnpm lint`, `pnpm prettier --write ${filenames.join(' ')}`],
};
