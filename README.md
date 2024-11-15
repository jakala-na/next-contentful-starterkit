# Next.js Contentful Starterkit

This starterkit is meant to provide a good mix of best practices for working with Contentful in Next.js. It doesn't pretend to be the only way, but it is meant to address the main painpoints concerning data-fetching, component resolution, live previews, configuration management and App development. We believe a good starterkit is use-case based, but there is no good way to model all use-cases in same starter, so while we're starting as a marketing site, it may evolve later. In fact, it is modeled around Contentful's own [Marketing Template](https://www.contentful.com/starter-templates/marketing-website/) content model, with a slight twist on the content part.

The starterkit's cornerstone is our data-fetching solution and it's typesafety. The goal is to have best-in-class Typescript-enabled, graphql-powered data fetching to eliminate guessing games in our components and provide full type definitions for free. The list of current features with descriptions can be found below.

## Features

- **Next.js App Router** usage for modern **React Server Components** approach - we think this is the way the industry will move to and it is a huge benefit for traditional websites to do data fetching only on the server and keep client bundle lean
- **GraphQL** + **gql.tada** plugin + Typescript for data fetching - we believe the best way to benefit from a GraphQL backend on the frontend is to use Typescript and be informed of what is available to you when you do data fetching, and gql.tada ensures you are not “lying to yourself” in your types by inferring them from the API.
- **Cypress testing** - we include a configured Cypress.io testing suite with ability to do both Component and E2E testing using Cucumber/BDD style syntax (optionally you can use traditional spec files too)
- **Reference Component Architecture** - we use Tailwind and shadcn/ui for the UI layer as a base, but more importantly the starter ships with reference component architecture that promotes UI component best practices. We focus on ability to reuse UI across projects, use of React Server Components for data-fetching and we demostrate how Contentful data can be integrated with a UI design system while preserving all Next.js features and Contentful features as part of the integration.
- **Component Renderer** - example of how to take a full tree of components and render them using a mapping of contentTypes to React components
- **Draft Mode** - preview mode for your application for Contentful Preview API usage
- **Contentful Live Preview** - Contentful live previews let you edit components side by side with a visual representation and Live Preview SDK also lets you annotate specific fields you are editing to get to the editor screen by just clicking “Edit” button on the frontend. We also integrated live updates, which will show result of content changes immediately as opposed to waiting for content to auto-save in Contentful.
- **Contentful Content Source Maps** - Optionally use Contentful Content Source Maps feature to get Live Preview SDK annotations without manually annotating your components, as well as get Vercel Content Link for Vercel customers.

## Getting Started

1. This project is a template, feel free to either clone it (to preserve project history) or use click "Use this template" to create a repository with a single init commit.
   As soon as you have a repository, clone it locally
2. Install dependencies with:

```
yarn install
```

3. Setup Contenful access
   To develop locally, you will want to connect to a Contentful instance that has the same data model as we use to develop, there are 3 ways to do that:

- You could get access to an existing space that follows Contentful Marketing Template content model, for example a colleague could share his space with you
- You could create your own space with https://www.contentful.com/starter-templates/marketing-website/. Keep in mind, new templates today can only be deployed on brand new Contentful accounts, so you might have to create a new account with a new email to do that, but this shouldn't be a problem, as it's free.
- You can start from scratch and use the contentful CLI and `/migrations/ctf-seed.json` to [import](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) our demo content into your own contentful instance: `yarn seed --environment-id=[ENVIRONMENT_ID] --space-id=[SPACE_ID]`

You will want to get a CDA and CPA API keys by using this [guide](https://www.contentful.com/developers/docs/references/authentication/#api-keys-in-the-contentful-web-app)

4. Configure environment

Create .env.local in root directory of the repo with the following contents:

```
CONTENTFUL_SPACE=<space id>
CONTENTFUL_DELIVERY_API=<delivery api key>
CONTENTFUL_PREVIEW_API=<preview api key>
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_PREVIEW_SECRET=secret
# Enable or disable Content Source Maps, see https://www.contentful.com/developers/docs/tools/vercel/content-source-maps-with-vercel/
CONTENTFUL_USE_CONTENT_SOURCE_MAPS=true
```

5. Run Dev Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation

- [Component Architecture](./docs/components.md)
- [Components UI Folder](./components/ui/README.md)
- [Data-fetching guide](./docs/data-fetching.md)
- [Features guide](./docs/features.md)
- [Analytics guide](./components/analytics/README.md)
- [Architecture Decision Records](./docs/decisions/)
- [Next.js docs](https://nextjs.org/docs)

## Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Support

While this starterkit is in active development, fixing some UI bugs or unfinished components may not be a priority.

This starterkit is meant to serve two purposes:

1. Provide best practices for starting new projects with Contentful and Next.js
2. Provide a demo site and a playground to test new features released in Next.js and Contenful

You are free to use the starterkit as a template to start new projects, but you can also pick and choose which reference implementations you like and copy them into your own project.

The demo site will evolve as we strive to demostrate more Next.js capabilities, but so will the Contentful part as Contentful adds more features (Contentful Studio, Taxonomy, etc)

Some features are going to be implemented just enough to demonstrate the concept in a demo, other features may be relying on particular infrastructure like on Vercel, it will be a balancing act.

Our commitment is to support majority of users and let them opt in, remove or modify certain functionality if they don't share the same infrastructure or feature set. We will provide documentation and guidance how to do that

## Contributors

This project is open-source under MIT license and accepts contributions, if you have any feedback, please create a discussion or an issue on Github.
