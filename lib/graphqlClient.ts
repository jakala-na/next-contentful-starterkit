import { GraphQLClient } from 'graphql-request';

export const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`;
export const graphqlToken = `${process.env.CONTENTFUL_DELIVERY_API}`;

export const graphqlClient = new GraphQLClient(graphqlEndpoint, {
  headers: {
    authorization: `Bearer ${graphqlToken}`
  },
  errorPolicy: 'all' // omit errors about Draft entries in Production mode
});
