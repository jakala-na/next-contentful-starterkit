# Data Fetching guide

This guide will focus on using GraphQL to fetch content from Contenful. The decision to use GraphQL as opposed to Contentful Delivery API is documented [here](./decisions/001-graphql-typescript.md) and you should give it a look to get a general sense of what you need to expect, it covers limitations of both approaches and mitigations in place.

## Fetching data

Fetching data with GraphQL is pretty simple, with it's introspective API you can explore the schema using tools like GraphiQL (or GraphQL Playground in Contentful), or you can use your IDE if configured correctly, see [guide](#configure-editor-to-use-gqltada)

We'll focus on the fundamentals for now. We'll work over a few scenarios for data fetching during this guide, starting with the most common and simple, fetching static content.

### Fetching static content

Static content, here defined as content that requires no user inputs and does not change based on application state, can be fetched ahead of time and pre-rendered in Next.js. We will assume this is 90% of the cases for marketing sites. Let's clarify with an example.

Let's say we're rendering the homepage, which consists of Header, Footer, SEO metadata, Page content, and top and bottom components. Some of the elements are shared between pages, like layout elements (header, footer), while others are page-specific. Components also come in hierarchies, for example:
Page (entry)

- Title
- Components
  - HeroBanner (entry)
    - Title
    - CTA (entry)
      - Title
      - URL

Ideally we want to describe one query for the layout (header,footer) and one for the page and it's components.

#### Layout query

For layout level queries, we recommend using [RootLayout](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates#root-layout-required) or the top-most shared layout between all pages and query all global elements directly with GraphQL in a single request.

Let's explore the demo content model, and how one can do top-level data fetching. The example content model has 3 content types related to navigation: Navigation Menu, Footer Menu and Menu Group, with Navigation Menu being used for header, while Footer menu being used for footer links.

To construct the header, we'll need to query Navigation Menu and the hierarchy of linked Menu Groups, let's look how it looks like:

```
Navigation Menu (entry)
- Menu Items
  - Menu Group (entry)
    - Group Name
    - Featured Pages
      - Page (entry)
      - Page (entry)
      - Page (entry)
  - Menu Group (entry)
    - Group Name
    - Group Link
      - Page (entry)
```

To query the menu hierarchy we will construct a GraphQL query that looks like this:

```tsx
const layoutQuery = graphql(`
  fragment Page on Page {}
  query Layout($locale: String, $preview: Boolean) {
    navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        menuItemsCollection {
          items {
            
          }
        }
      }
    }
    footerMenuCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        instagramLink
        twitterLink
        linkedinLink
        facebookLink
        legalLinks {
          groupName
          groupLink {
            ... on Page {
              pageName
              slug
            }
          }
          featuredPagesCollection(limit: 10) {
            items {
              ... on Page {
                pageName
                slug
              }
            }
          }
        }
        menuItemsCollection {
          items {
            groupName
            groupLink {
              ... on Page {
                pageName
                slug
              }
            }
            featuredPagesCollection(limit: 10) {
              items {
                ... on Page {
                  pageName
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`);
```

You can notice we are getting all navigation menus, but since we know there is only one available, we're limiting it to 1.
We're wrapping the query in `graphql()` function call from gql.tada so that gql.tada can do it's magic of type-inference and give us response types for our query.

Notice how much knowledge our layout has now of various content types and units of our content architecture, also you will find some repetition, this is not good. For example a Page content type has pageName and slug fields, but we're exposing this complexity to our Layout query instead of sharing it across our application. Same for Menu Group content available in menuItemsCollection fields on both header and footer menus, but also uniquely used in legalLinks as well. We should be able to reuse some of this logic. This is what GraphQL Fragments are designed to solve.

Let's refactor our query to use fragments:

```tsx
const layoutQuery = graphql(`
  fragment PageLinkFields on Page {
    pageName
    slug
  }
  fragment MenuGroupFields on MenuGroup {
    groupName
    groupLink {
      ...PageLinkFields
    }
    featuredPagesCollection(limit: 10) {
      items {
        ...PageLinkFields
      }
    }
  }
  query Layout($locale: String, $preview: Boolean) {
    navigationMenuCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        menuItemsCollection {
          items {
            ...MenuGroupFields
          }
        }
      }
    }
    footerMenuCollection(locale: $locale, preview: $preview, limit: 1) {
      items {
        instagramLink
        twitterLink
        linkedinLink
        facebookLink
        legalLinks {
          ...MenuGroupFields
        }
        menuItemsCollection {
          items {
            ...MenuGroupFields
          }
        }
      }
    }
  }
`);
```

Here we added 2 new fragments, one for displaying page fields needed to show a link, and another MenuGroupFields fragment for rendering a menu group with nested PageLinkFields fragment. This is much better.

Now, while there are benefits to top-level data-fetching in single request, there are downsides as well. You will notice that top-level query is aware of all the possible component structure, and components themselves will have to follow top-level query structure. This is not ideal.

In gql.tada there is a concept of [fragments collocation](https://gql-tada.0no.co/guides/fragment-colocation#fragment-colocation-1) that encourages fragments to live with their components or function where they are used and [fragment masking](https://gql-tada.0no.co/guides/fragment-colocation#fragment-masking), that prevents you from using the fragment in other places, unless you unmask it by using original fragment definition from collocated export. These concepts will help us design more reusable and decoupled components, but still let us bubble our data-fetching to top-level if we wish to do so.

[describe moving fragments and collocating them with components]

### Page query

Coming soon...

### Regenerate graphql schema

If you're adding new content types or making changes to the content model, you will need to generate a new graphql schema to get type inference in Typescript working and to get autocomplete in IDE. This can be done by running:

```bash
pnpm --filter=marketing generate:schema
```

After new types are generated, you will get changes in `./gql/` folder that you'll have to commit after you are done developing the feature.
Keep in mind, schema generation will take your `.env.local` and read the CONTENTFUL_ENVIRONMENT you are pointing to, so if you create a new content type on a different environment, it will not be pulled, or the opposite, if you have unwanted content types in your sandbox environment, they will all appear in the schema. Make sure you commit changes you intend to commit!

### Configure editor to use gql.tada and autocomplete

GraphQL tooling needed locally consists of 2 parts:

- GraphQL Language support
- Typescript inference with gql.tada

**Autocomplete and language support:**

Make sure if you're using an editor with a plugin system, you'll want to install a plugin with GraphQL language support.
In VSCode or Cursor you can use [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql).
In Webstorm you can use [GraphQL Plugin](https://www.jetbrains.com/help/webstorm/graphql.html)
Those plugins/extensions typically will load GraphQL config from any GraphQL Config file, mainly we use [.graphqlrc.yml](/.graphqlrc.yml) and enable features such as:

- Query syntax highlighting
- Autocompletion of queries
- Go to definition

If you need the plugin/extension to extract queries/fragments from more places, make sure to look at [.graphqlrc.yml](/.graphqlrc.yml) rules, as those define what files get scanned for GraphQL queries and fragments.

[!WARNING]
Keep in mind that if you're using VSCode or Cursor and you have issues with "Unknown fragment" errors, you'll want to downgrade GraphQL Language Feature Support extension to version 0.9.3 until this [issue](https://github.com/graphql/graphiql/issues/3620) is resolved.

**gql.tada support**

While gql.tada comes pre-configured with the project, you might want to know a little about how it works. You can refer to [workflows docs](https://gql-tada.0no.co/get-started/workflows) to learn more about how to use gql.tada, but we'll give you the gist here.

In order for gql.tada's GraphQLSP plugin to work (and infer types), you need to have local Typescript server making the type inference (`node_modules/typescript/lib`)
If you are using VSCode, the .vscode/settings.json in the repo is already configured to use the local Typescript server, but if things don't work, please double-check.

If using Webstorm, make sure you configure the Typescript interpreter from node_modules/typescript/lib as well under Settings -> Language & Frameworks -> Typescript

If you can't use a Typescript server in your IDE, you can optionally generate a gql/graphql-env.d.ts by running this command:

```bash
pnpm --filter=marketing generate:output
```

This command will also run `gql.tada turbo` which will generate a cache file that should also be commited. This cache file will speed up inference for new users who just checked out a new branch.
More info [here](https://gql-tada.0no.co/devlog/2024-04-15)
