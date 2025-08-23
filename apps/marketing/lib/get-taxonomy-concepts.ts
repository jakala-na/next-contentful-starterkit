import memoize from 'lodash/memoize';

import { managementClient } from './rest-client';
import type { ConceptProps } from 'contentful-management';

/**
 * Get all taxonomy concepts for the specified organization_id.
 *
 * Recursively calls itself when additional pages exist.
 *
 * @param organizationId - The Contentful Organization ID to fetch concepts for.
 * @param pageUrl - The 'next' page URL returned in the Contentful API response.
 * @param limit - The maximum number of concepts to return with each API request.
 * @returns A Promise of an array of concepts.
 */
const fetchTaxonomyConcepts = async (organizationId: string, pageUrl = '', limit = 100): Promise<ConceptProps[]> => {
  const { pages, items } = await managementClient().concept.getMany({
    organizationId,
    query: {
      limit,
      pageUrl,
    },
  });

  if (pages?.next) {
    const nextItems = await fetchTaxonomyConcepts(organizationId, pages.next);
    return items.concat(nextItems);
  }

  return items;
};

/**
 * Use memoize to save the result for subsequent requests.
 *
 * We use lodash.memoize to allow usage in server-actions and other non-RSC cases.
 *
 * @see https://react.dev/reference/react/cache#pitfall-memoized-call-outside-component
 */

export const getTaxonomyConcepts = memoize(fetchTaxonomyConcepts);
