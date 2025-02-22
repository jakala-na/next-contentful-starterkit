/**
 * This file is a server-only file, meaning it should not be included in the client bundle.
 * @see https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
 */

import 'server-only';

import { createClient, fetchExchange, mapExchange } from '@urql/core';
import { persistedExchange } from '@urql/exchange-persisted';
import { authExchange } from '@urql/exchange-auth';
import memoize from 'lodash/memoize';
import { getToken } from './auth';

const makeClient = async (preview: boolean) => {
  return createClient({
    url: process.env.DRUPAL_GRAPHQL_URI ?? '<missing graphql uri>',
    exchanges: [
      authExchange(async (utils) => {
        const token = await getToken({
          uri: process.env.DRUPAL_AUTH_URI ?? '<missing graphql uri>',
          clientId:
            (preview ? process.env.DRUPAL_PREVIEWER_CLIENT_ID : process.env.DRUPAL_VIEWER_CLIENT_ID) ??
            '<missing client id>',
          clientSecret:
            (preview ? process.env.DRUPAL_PREVIEWER_CLIENT_SECRET : process.env.DRUPAL_VIEWER_CLIENT_ID) ??
            '<missing client id>',
        });

        return {
          addAuthToOperation(operation) {
            if (!token) {
              return operation;
            }
            return utils.appendHeaders(operation, {
              Authorization: token,
            });
          },
          didAuthError(error, _operation) {
            return error.response?.status === 403;
          },
          refreshAuth() {
            return new Promise(() => {
              // TODO: Use refresh token or replace with new token.
            });
          },
        };
      }),
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
       * This exchange is meant to be before fetch so that it can be executed right after fetch is done on the way back.
       *
       * @see https://github.com/urql-graphql/urql/issues/225#issuecomment-482592203
       */
      mapExchange({
        onError: (error) => {
          // Filter out expected errors like PERSISTED_QUERY_NOT_FOUND, pass others to the server.
          const errors = error.graphQLErrors.filter((err) => err.message !== 'PersistedQueryNotFound');

          if (errors.length > 0) {
            // TODO: Add Sentry or similar error reporting.
            // eslint-disable-next-line no-console -- logging errors to node.js console
            console.error('GraphQL Errors:', JSON.stringify(errors, null, 2));
          }
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
export const client = memoize(makeClient);
