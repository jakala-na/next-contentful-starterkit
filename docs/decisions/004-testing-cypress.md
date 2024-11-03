# Testing with Cypress,io

Date: 2023-01-04

Status: accepted

## Context

As the starterkit is supposed to provide certain best practices, an opportunity showed up to decide what a good testing strategy for typical projects on Next.js can be.

The solution had to cover a few things:

- Have great community support and be popular
- Have preview abilities or debug mode that can show failed steps
- Have ability to author tests with BDD-style statements that promote focus on acceptance-criteria rather than pure visual snapshotting
- Have ability to be extended plugins
- Have ability to be used for Component testing if possible

An obvious choice was going with Cypress.io as end-to-end testing framework with all those features available.
Originally we considered Playwright as a close second contender, the only reason it didn't get more points was due to lack of Component Testing mode and lack of "live debugging" app. Which both were added after the decision was made

## Decision

Decided to incorporate Cypress.io with BDD style Cucumber language to write both e2e and component tests.
See [docs](../../cypress/README.md) for more info

## Consequences

- Cypress will be used for Component Testing and it will not require use of React testing library. Since this is an E2E framework running component tests, we're giving up speed, as alternatives like jest or vitest with unit-tests and react teasting library could probably run faster
- Gherkin format will be more suitable for QA folks to read and potentially re-use steps without dev support (eventually), but more boilerpate code need to be written to wrap the steps in Gherkin primitives.
