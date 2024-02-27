# Next Contentful Starterkit

This starterkit is meant to provide a good mix of best practices for working with Contentful in NextJS. It doesn't pretend to be the only way, but it is meant to address the main painpoints concerning data-fetching, component resolution, live previews, configuration management and App development. We believe a good starterkit is use-case based, but there is no good way to model all use-cases in same starter, so our use-case is a marketing or corporate site, it fact, it is modeled around Contentful's own [Marketing Template](https://www.contentful.com/starter-templates/marketing-website/) content model.

The starterkit's cornerstone is our data-fetching solution and it's typesafety. The goal is to have best-in-class Typescript-enabled, graphql-powered data fetching to eliminate guessing games in our components and provide full type definitions for free. The full list of current features with descriptions can be found below.

## Features

* **NextJS App Router** usage for modern **React Server Components** approach - we think this is the way the industry will move and it is a huge benefit for traditional websites to do data fetching only on the server and keep client-bundle lean
* **GraphQL** + **GraphQL Codegen** with **client-preset** plugin + Typescript for data fetching - we believe the best way to benefit from a GraphQL backend on the frontend is to use Typescript and be informed of what is available to you when you do data fetching, and GraphQL Codegen ensures you are not “lying to yourself” in your types by generating them from the API.
* **Cypress testing** - we include a configured Cypress.io testing suite with ability to do both Component and E2E testing using Cucumber/BDD style syntax (optionally you can use traditional spec files too)
Component Renderer - example of how to take a full tree of components and render them using a mapping of contentTypes to React components
* **Draft Mode** - preview mode for your application for Contentful Preview API usage
* Use of **Contentful Live Preview** - contentful live previews let you edit components side by side with a visual representation and Live Preview SDK also lets you annotate specific fields you are editing to get to the editor screen by just clicking “Edit” button on the frontend. We also integrated live updates, which will show result of content changes immediately as opposed to waiting for content to auto-save in Contentful

## Getting Started

Clone the repo of course ;)

### Contentful access
To develop locally, you will want to connect to a Contentful instance that has the same data model as we use to develop, there are 2 ways to do that:
1. You could get access to an existing space that follows Contentful Marketing Template content model, for example a collegue could share his space with you
2. You could create your own space with https://www.contentful.com/starter-templates/marketing-website/. Keep in mind, new templates today can only be deployed on brand new Contentful accounts, so you might have to create a new account with a new email to do that, but this shouldn't be a problem, as it's free.

### Configure environment

Create .env.local in root directory of the repo with the following contents:
```
CONTENTFUL_SPACE=<space id>
CONTENTFUL_DELIVERY_API=<delivery api key>
CONTENTFUL_PREVIEW_API=<preview api key>****
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_PREVIEW_SECRET=secret
```

### Dev Server

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Caveats
* Currently the app is unstyled and styling was not priority, but that should not scare you as the data-fetching and rendering should still work
* There are only 2 components now, so most pages have blank content because they don't have the components implemented, we test things on homepage now

## NextJS Docs

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
