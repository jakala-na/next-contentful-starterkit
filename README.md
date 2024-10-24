# Next Contentful Starterkit

This starterkit is meant to provide a good mix of best practices for working with Contentful in NextJS. It doesn't pretend to be the only way, but it is meant to address the main painpoints concerning data-fetching, component resolution, live previews, configuration management and App development. We believe a good starterkit is use-case based, but there is no good way to model all use-cases in same starter, so our use-case is a marketing or corporate site, it fact, it is modeled around Contentful's own [Marketing Template](https://www.contentful.com/starter-templates/marketing-website/) content model.

The starterkit's cornerstone is our data-fetching solution and it's typesafety. The goal is to have best-in-class Typescript-enabled, graphql-powered data fetching to eliminate guessing games in our components and provide full type definitions for free. The full list of current features with descriptions can be found below.

## Features

- **NextJS App Router** usage for modern **React Server Components** approach - we think this is the way the industry will move and it is a huge benefit for traditional websites to do data fetching only on the server and keep client-bundle lean
- **GraphQL** + **gql.tada** plugin + Typescript for data fetching - we believe the best way to benefit from a GraphQL backend on the frontend is to use Typescript and be informed of what is available to you when you do data fetching, and gql.tada ensures you are not “lying to yourself” in your types by inferring them from the API.
- **Cypress testing** - we include a configured Cypress.io testing suite with ability to do both Component and E2E testing using Cucumber/BDD style syntax (optionally you can use traditional spec files too)
- **Component Renderer** - example of how to take a full tree of components and render them using a mapping of contentTypes to React components
- **Draft Mode** - preview mode for your application for Contentful Preview API usage
- Use of **Contentful Live Preview** - contentful live previews let you edit components side by side with a visual representation and Live Preview SDK also lets you annotate specific fields you are editing to get to the editor screen by just clicking “Edit” button on the frontend. We also integrated live updates, which will show result of content changes immediately as opposed to waiting for content to auto-save in Contentful.

## Getting Started

1. This project is a template, feel free to either clone it (to preserve project history) or use click "Use this template" to create a repository with a single init commit.
   As soon as you have a repository, clone it locally
2. Install dependencies with:

```
yarn install
```

3. Setup Contenful access
   To develop locally, you will want to connect to a Contentful instance that has the same data model as we use to develop, there are 2 ways to do that:

- You could get access to an existing space that follows Contentful Marketing Template content model, for example a collegue could share his space with you
- You could create your own space with https://www.contentful.com/starter-templates/marketing-website/. Keep in mind, new templates today can only be deployed on brand new Contentful accounts, so you might have to create a new account with a new email to do that, but this shouldn't be a problem, as it's free.

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

### GraphQL Docs

#### Regenerate graphql schema

If you're adding new content types or making changes to the content model, you will need to generate a new graphql schema to get type inference in Typescript working and to get autocomplete in IDE. This can be done by running:

```bash
yarn generate:schema
```

After new types are generated, you will get changes in `./gql/` folder that you'll have to commit after you are done developing the feature.
Keep in mind, schema generation will take your `.env.local` and read the CONTENTFUL_ENVIRONMENT you are pointing to, so if you create a new content type on a different environment, it will not be pulled, or the opposite, if you have unwanted content types in your sandbox environment, they will all appear in the schema. Make sure you commit changes you intend to commit!

### Configure editor to use gql.tada

In order for gql.tada's GraphQLSP plugin to work (and infer types), you need to have local Typescript server making the type inference (`node_modules/typescript/lib`)

If you are using VSCode, the .vscode/settings.json in the repo is already configured to use the local Typescript server.

If using Webstorm, make sure you configure the Typescript interpretter from node_modules/typescript/lib as well under Settings -> Language & Frameworks -> Typescript

If you can't use a Typescript server in your IDE, you can optionally generate a gql/graphql-env.d.ts by running this command.

```bash
yarn generate:output
```

This command will also run `gql.tada turbo` which will generate a cache file that should also be commited. This cache file will speed up inference for new users who just checked out a new branch.
More info [here](https://gql-tada.0no.co/devlog/2024-04-15)

### Content Source Maps in Live Preview and on Vercel

Contentful has released a new live-preview API compatible content source maps spec, you can read more [here](https://www.contentful.com/developers/docs/tools/vercel/content-source-maps-with-vercel/). This implementation enabled effortless inspector mode annotations in Live Preview, as well as full Edit Mode support on Vercel. Unfortunately for some folks testing the starterkit on FREE plan, this feature is only available on Pro+. While Content Source Maps enables Visual Editing on Vercel, Visual Editing is also only available in Pro+. If you're testing the starterkit and would like to not use content source maps, you are free to opt out by:

1. Settings `CONTENTFUL_USE_CONTENT_SOURCE_MAPS=false` in .env.local or in Vercel
2. Removing `@contentSourceMaps` directive from GraphQL queries

** Note: @contentSourceMaps ideally could be added conditionally, but gql.tada prevents any dynamic strings from being typed TadaDocumentNode. In future we will add the @contentSourceMaps directive to all queries in urql exchange.**

### Import Contentful content
The repository contains demo content in contentful/import/seed.json file. To import this content into your Contentful space run this command:
```contentful space import --space-id=[SPACE_ID] --environment-id=[ENVIRONMENT_ID] --management-token=[CMA_TOKEN] --content-file=contentful/import/seed.json --retry-limit=100```

## NextJS Docs

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
