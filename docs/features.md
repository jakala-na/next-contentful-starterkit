### Content Source Maps in Live Preview and on Vercel

Contentful has released a new live-preview API compatible content source maps spec, you can read more [here](https://www.contentful.com/developers/docs/tools/vercel/content-source-maps-with-vercel/). This implementation enabled effortless inspector mode annotations in Live Preview, as well as full Edit Mode support on Vercel. Unfortunately for some folks testing the starterkit on FREE plan, this feature is only available on Pro+. While Content Source Maps enables Visual Editing on Vercel, Visual Editing is also only available in Pro+. If you're testing the starterkit and wouldn't like to use content source maps, you are free to opt out by:

1. Settings `CONTENTFUL_USE_CONTENT_SOURCE_MAPS=false` in .env.local or in Vercel
2. Removing `@contentSourceMaps` directive from GraphQL queries

** Note: @contentSourceMaps ideally could be added conditionally, but gql.tada prevents any dynamic strings from being typed TadaDocumentNode. In future we will add the @contentSourceMaps directive to all queries in urql exchange.**
