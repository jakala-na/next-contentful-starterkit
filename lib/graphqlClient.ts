/**
 * This file is a server-only file, meaning it should not be included in the client bundle.
 * @see https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
 */

import 'server-only';

import { createClient, fetchExchange } from '@urql/core';
import { persistedExchange } from '@urql/exchange-persisted';
import memoize from 'lodash/memoize';
import { mapExchange } from 'urql';

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

const makeClient = (preview: boolean) => {
  return createClient({
    url:
      graphqlEndpoint +
      `?access_token=${preview ? process.env.CONTENTFUL_PREVIEW_API : process.env.CONTENTFUL_DELIVERY_API}`,
    exchanges: [
      /**
       * Enable Automated Persisted Queries to reduce the size of the request.
       *
       * Keep in mind persistedExchange should be placed before fetchExchange.
       *
       * @see https://www.contentful.com/developers/docs/references/graphql/#/reference/automatic-persisted-queries
       */
      persistedExchange({
        preferGetForPersistedQueries: true,
      }),
      /**
       * It map seem counter-intuitive, but exchanges are bi-directional, so mapExchange can both pass things to fetch,
       * as well as receive errors back from fetch on it's way back.
       * This exchange is meant to be before fetch!
       *
       * @see https://github.com/urql-graphql/urql/issues/225#issuecomment-482592203
       */
      mapExchange({
        onError: (error) => {
          // TODO: Add Sentry or similar error reporting.
          console.error('GraphQL Error:', JSON.stringify(error, null, 2));
        },
      }),
      fetchExchange,
    ],
  });
};

/**
 * Use memoize to share a client between all requests.
 * While urql docs mention using registerUrql to memoize the client,
 * at the moment of writing, registerUrql uses React.cache which works only in RSCs.
 *
 * We use lodash.memoize to allow usage in server-actions and other non-RSC cases.
 *
 * @see https://react.dev/reference/react/cache#pitfall-memoized-call-outside-component
 * @see https://commerce.nearform.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs
 */

export const graphqlClient = memoize(makeClient);
