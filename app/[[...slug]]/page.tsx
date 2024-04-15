import { ComponentRenderer } from "#/components/component-renderer";
import { DebugModeBar } from "#/components/debug-mode/debug-mode-bar";
import { graphql } from "#/gql";
import { graphqlClient } from "#/lib/graphqlClient";
import { draftMode } from "next/headers";

const getPage = async (slug: string, locale: string, preview = false) => {
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
  return (
    await graphqlClient(preview).request(pageQuery, {
      locale,
      preview,
      slug,
    })
  ).pageCollection?.items?.[0];
};

const getPageSlugs = async () => {
  const pageQuery = graphql(/* GraphQL */ `
    query PageSlugs($locale: String) {
      # Fetch 50 pages. Ideally we would fetch a good sample of most popular pages for pre-rendering,
      # but for the sake of this example we'll just fetch the first 50.
      pageCollection(locale: $locale, limit: 50) {
        items {
          slug
        }
      }
    }
  `);

  const pages = await graphqlClient(false).request(pageQuery, {
    locale: "en-US",
  });

  return (
    pages?.pageCollection?.items
      .filter((page) => page?.slug)
      .map((page) => ({
        slug: page?.slug === "home" ? "/" : page?.slug,
      })) || []
  );
};

export default async function LandingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.join("/") ?? "home";

  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPage(slug, "en-US", isDraftMode);

  const topComponents = pageData?.topSectionCollection?.items;

  return (
    <div>
      <DebugModeBar isDraftMode={isDraftMode} slug={slug} />
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
    </div>
  );
}

export const revalidate = 60;

export async function generateStaticParams() {
  return (await getPageSlugs()).map((page) => ({
    slug: page?.slug?.split("/"),
  }));
}
