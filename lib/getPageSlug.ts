import { graphql } from "#/gql";
import { graphqlClient } from "#/lib/graphqlClient";

const getPageSlug = async (slug: string, locale: string, preview = false) => {
  const pageSlugQuery = graphql(/* GraphQL */ `
    query PageSlugQuery($slug: String, $locale: String, $preview: Boolean) {
      pageCollection(
        locale: $locale
        preview: $preview
        limit: 1
        where: { slug: $slug }
      ) {
        items {
          slug
        }
      }
    }
  `);

  return (
    await graphqlClient(preview).request(pageSlugQuery, {
      locale,
      preview,
      slug,
    })
  ).pageCollection?.items?.[0];
};

export default getPageSlug;