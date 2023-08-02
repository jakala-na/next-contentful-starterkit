import { GraphQLClient } from "graphql-request";

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`;

export const graphqlClient = (preview: boolean) =>
  new GraphQLClient(graphqlEndpoint, {
    headers: {
      authorization: `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_API
          : process.env.CONTENTFUL_DELIVERY_API
      }`,
    },
  });
