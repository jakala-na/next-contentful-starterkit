# Cypress.io integration with E2E and Component testing

Current project has a configured Cypress.io integration with both e2e support and with component testing support. Even more so, you are encouraged to write tests BDD-style or ATDD-style, meaning the tests are focused on functionality and defining what is the definition of "DONE". You will write tests in Gherkin (aka Cucumber) format in plain English and describe the feature and interactions

Additionally the project is configured with the following plugins:

- Image Snapshot

See https://github.com/jaredpalmer/cypress-image-snapshot

Used to take snapshots of components when they are tested for the first time and meant to represent a gating process when developing changes to components and introducing accidental visual regressions. This plugin could be used for E2E testing but will likely be less efficient

- Cypress AXE

See https://github.com/component-driven/cypress-axe

Uses Axe Core to do accessibility testing

## Installation and running locally

After a project was cloned, make sure to install dependencies using `pnpm`

Next just run `pnpm cypress open` to open the Cypress Web App

### CI execution or running headless

You can run cypress without a GUI in command line with
`pnpm cypress run` - for e2e tests

`pnpm cypress run --component` - for component tests
