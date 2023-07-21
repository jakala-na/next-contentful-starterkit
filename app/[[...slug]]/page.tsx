import { ComponentRenderer } from "#/components/component-renderer";
import { graphql } from "#/gql";
import { PageTopSectionItem } from "#/gql/graphql";
import { graphqlClient } from "#/lib/graphqlClient";
import { draftMode } from "next/headers";

export default async function LandingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.join("/") ?? "home";

  const { isEnabled: isDraftMode } = draftMode();
  const pageQuery = graphql(/* GraphQL */ `
    query PageQuery($slug: String, $locale: String, $preview: Boolean) {
      pageCollection(
        locale: $locale
        preview: $preview
        limit: 1
        where: { slug: $slug }
      ) {
        items {
          topSectionCollection(limit: 10) {
            items {
              ...ComponentHeroBannerFields
              ...ComponentDuplexFields
            }
          }
        }
      }
    }
  `);

  const pageData = (
    await graphqlClient.request(pageQuery, {
      locale: "en-US",
      preview: isDraftMode,
      slug,
    })
  ).pageCollection?.items?.[0];

  const topComponents = pageData?.topSectionCollection?.items;

  return (
    <div>
      <>Page slug: {slug}</>
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
    </div>
  );
}
