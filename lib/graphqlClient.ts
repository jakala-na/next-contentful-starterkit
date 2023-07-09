import { GraphQLClient } from "graphql-request";

export const graphqlEndpoint = `http://localhost:3000/api/graphql`;

export const graphqlClient = new GraphQLClient(graphqlEndpoint);
