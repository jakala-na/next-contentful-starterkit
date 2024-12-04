# Adopting multi-package Turborepo

Date: 2024-12-04

Status: accepted

## Context

From the beginning, one of the goals for the starterkit was to showcase modern best practices and tooling for building production ready websites with Contentful.
One of the challenges with that is, not every project is of the same complexity and size. Contentful's templates themselves come in 3 flavors (Marketing, E-commerce, Blog) and originally the goal was to keep things simple, but it was clear that marketing template can't cover all use-cases.

The hypothetical starterkit should be able to cover:

_Templates_:

- Marketing websites with rich content and layout building capabilities
- E-commerce websites that tap into Contentful for merchandising content
- Personalization with Ninetailed

_Tooling best practices_:

- Cypress or Playwright for e2e testing
- Contentful Apps for authoring experience improvements
- Serverless backend for periodic imports and migrations
- Contentful migration API and CI/CD workflow for schema changes

_Documentation and internal tooling_

- CLI for initializing projects
- Documentation website with examples

While the project is a showcase, it's also a starter, hence it should be easy to remove any of the packages and make it fit your exact needs.
Unfortunately, a single-package Next.js project does not promote the level of separation required for the flexibility needed.

Ideal solution would be to have a monorepo with multiple packages, each package being either required, or optional for selection (like Cypress vs Playwright), monorepo could also help with multiple templates sharing same code for data-fetching, utils, etc.

Options Considered

1. Turborepo

Pros:

- Vercel-backed tooling that plays well with Next.js
- Doesn't manage dependencies, only helps with tasks and caching
- Great documentation and community
- Easy to pick up for developers new to monorepos

Cons:

- Lack of plugins for common tasks like linting, formatting, testing, etc.
- Potentially slower build times and less advanced caching compared to NX

2. NX

Pros:

- Available plugins for common frameworks and tasks (like Next.js, cypress, eslint, etc)
- Ability to distribute tasks across many machines for CI
- More advanced codegen ability
- More advanced dependency tracking for CI
- Great migration support (codemods, dependency management, etc)
- Centralized dependency management

Cons:

- More complex to set up and maintain, requires specialized knowledge
- Plugins are usually managing their dependencies (like Next.js) and you have to wait for plugin releases to catch up with latest Next.js versions
- Unique wrappers and middlewares provided by plugins usually make things harder to debug

For this stage of the project Turborepo seems to be a simpler choice that requires less commitment, has great support for Next.js and will work for our size.
Since the starterkit can be stripped down to a few packages, it's unlikely that having NX right from the start would be necessary to account for larger scale projects, at least not at the detriment of 80% of use cases.

## Decision

1. Adopt pnpm as package manager better suited for monorepos (alternatives exist, but pnpm is closest drop-in alternative to npm)
2. Convert project to multi-package monorepo using Turborepo

## Consequences

1. Move files from root to respective packages
2. Extract packages/ui package for UI-only components (inline with original vision for the components/ui folder)
3. Rewrite ESLint, tsconfig and use this opportunity to adopt stricter vercel/style-guide ESLint rules
4. Add Turborepo tasks for dev, lint, build, etc
5. Update documentation to reflect new structure
