// Ensure these functions run on the server.
'use server';

import memoize from 'lodash/memoize';
import slugify from 'slugify';
import uniquify from '@acusti/uniquify';
import type { ConceptProps as CflConceptProps } from 'contentful-management';
import type { LocalizedEntity } from 'contentful-management/dist/typings/entities/utils';

import { managementClient } from './rest-client';

interface ConceptAddProps {
  slug: string;
}

export type ConceptProps<Locales extends string = string> = LocalizedEntity<ConceptAddProps, 'slug', Locales> &
  CflConceptProps;

/**
 * Get all taxonomy concepts for the specified organization_id.
 *
 * Recursively calls itself when additional pages exist.
 *
 * @param organizationId - The Contentful Organization ID to fetch concepts for.
 * @param pageUrl - The 'next' page URL returned in the Contentful API response.
 * @param limit - The maximum number of concepts to return with each API request.
 * @param allSlugs - An array of unique slugs used by uniquify().
 * @returns A Promise of an array of concepts.
 */
const fetchTaxonomyConcepts = async (
  organizationId: string,
  pageUrl = '',
  limit = 100,
  allSlugs: string[] = []
): Promise<ConceptProps[]> => {
  const { pages, items: originalItems } = await managementClient().concept.getMany({
    organizationId,
    query: {
      limit,
      pageUrl,
    },
  });

  const slugifyOptions = {
    lower: true,
    replacement: '-',
  };
  const uniquifyOptions = {
    separator: '-',
  };

  const items = originalItems.map((concept) => {
    return {
      ...concept,
      slug: Object.fromEntries(
        Object.entries(concept.prefLabel).map(([locale, label]) => {
          const slug = slugify(label, slugifyOptions);
          const uniqueSlug = uniquify({ items: allSlugs, value: slug, ...uniquifyOptions });
          allSlugs.push(uniqueSlug);
          return [locale, slug];
        })
      ),
    };
  });

  if (pages?.next) {
    const nextItems = await fetchTaxonomyConcepts(organizationId, pages.next, limit, allSlugs);
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

export const getConceptBySlug = async (slug: string, locale: string) => {
  const taxonomyConcepts = await getTaxonomyConcepts(process.env.CONTENTFUL_ORGANIZATION ?? '<missing organization>');
  return taxonomyConcepts.find((concept) => concept.slug[locale] === slug);
};
