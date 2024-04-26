import { graphql } from 'gql.tada';

import { graphqlClient } from '#/lib/graphqlClient';

const getPageSlug = async (slug: string, locale: string, preview = false) => {
  const pageSlugQuery = graphql(`
    query PageSlugQuery($slug: String, $locale: String, $preview: Boolean) {
      pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
        items {
          slug
        }
      }
    }
  `);

  return (
    await graphqlClient(preview).query(pageSlugQuery, {
      locale,
      preview,
      slug,
    })
  ).data?.pageCollection?.items?.[0];
};

export default getPageSlug;
