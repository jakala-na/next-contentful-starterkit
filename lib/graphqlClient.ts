const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { devtoolsExchange } from "@urql/devtools";
const makeClient = (preview: boolean) => {
  return createClient({
    url:
      graphqlEndpoint +
      `?access_token=${preview ? process.env.CONTENTFUL_PREVIEW_API : process.env.CONTENTFUL_DELIVERY_API}`,
    fetch: fetch,
    exchanges: [devtoolsExchange, cacheExchange, fetchExchange],
  });
};
export const graphqlClient = (preview: boolean) => {
  const { getClient: deliveryClient } = registerUrql(() => makeClient(false));
  const { getClient: previewClient } = registerUrql(() => makeClient(true));
  return preview ? previewClient() : deliveryClient();
};
