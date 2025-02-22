/**
 * This file is a server-only file, meaning it should not be included in the client bundle.
 * @see https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
 */

import 'server-only';

import * as contentful from 'contentful';
import * as contentfulManagement from 'contentful-management';
import memoize from 'lodash/memoize';

const makeClient = (preview: boolean) => {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE ?? '<missing space>',
    accessToken:
      (preview ? process.env.CONTENTFUL_PREVIEW_API : process.env.CONTENTFUL_DELIVERY_API) ?? '<missing token>',
  });
};

const makeManagementClient = () => {
  return contentfulManagement.createClient(
    {
      accessToken: process.env.CONTENTFUL_MANAGEMENT_API ?? '<missing token>',
    },
    { type: 'plain' }
  );
};

/**
 * Use memoize to share clients between all requests.
 *
 * We use lodash.memoize to allow usage in server-actions and other non-RSC cases.
 *
 * @see https://react.dev/reference/react/cache#pitfall-memoized-call-outside-component
 */

export const restClient = memoize(makeClient);
export const managementClient = memoize(makeManagementClient);
