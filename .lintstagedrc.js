const path = require('path')

const buildEslintCommand = (filenames) =>
  filenames.map(
    (f) => `next lint --fix --file ${path.relative(process.cwd(), f)}`
  )

const buildPrettierCommand = (filenames) =>
  filenames.map((f) => `prettier --write '${f}'`)

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
}
