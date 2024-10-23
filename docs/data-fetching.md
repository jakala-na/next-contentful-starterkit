# Data Fetching guide

This guide will focus on using GraphQL to fetch content from Contenful. The decision to use GraphQL as opposed to Contentful Delivery API is documented [here](./decisions/001-graphql-typescript.md) and you should give it a look to get a general sense of what you need to expect, it covers limitations of both approaches and mitigations in place.

## Fetching data

Fetching data with GraphQL is pretty simple, with it's introspective API you can explore the schema using tools like GraphiQL (or GraphQL Playground in Contentful), or you can use your IDE if configured correctly, see [guide](#configure-editor-to-use-gqltada)

We'll focus on the fundamentals for now. We'll work over a few scenarios for data fetching during this guide, starting with the most common and simple, fetching static content.

### Fetching static content

Static content, here defined as content that requires no user inputs and does not change based on application state, can be fetched ahead of time and pre-rendered in NextJS. We will assume this is 90% of the cases for marketing sites. Let's clarify with an example.

Let's say we're rendering the homepage, which consists of Header, Footer, SEO metadata, Page content, and top and bottom components. Some of the elements are shared between pages, like layout elements (header, footer), while others are page-specific. Components also come in hierarchies, for example:
- Title
- Components
  - HeroBanner
    - Title
    - CTA
      - Title
      - URL

Ideally we want to describe a query for layout (header,footer) and one for the page and it's components.

### Regenerate graphql schema

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
