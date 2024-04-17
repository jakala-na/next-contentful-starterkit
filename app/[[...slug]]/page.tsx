import { ComponentRenderer } from "#/components/component-renderer";
import { DebugModeBar } from "#/components/debug-mode/debug-mode-bar";
import DebugMode from "#/components/debug-mode/debug-mode";
import { graphql } from "gql.tada";
import { graphqlClient } from "#/lib/graphqlClient";
import { draftMode } from "next/headers";
import { ComponentHeroBannerFieldsFragment } from "#/components/hero-banner-ctf/hero-banner-ctf";
import { ComponentDuplexFieldsFragment } from "#/components/duplex-ctf/duplex-ctf";
import { ComponentFormFieldsFragment } from "#/components/form-ctf/form-ctf";

const getPage = async (slug: string, locale: string, preview = false) => {
  const pageQuery = graphql(
    `
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
                  ...ComponentFormFields
              }
            }
          }
        }
      }
    `,
    [ComponentHeroBannerFieldsFragment, ComponentDuplexFieldsFragment, ComponentFormFieldsFragment]
  );
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
      <DebugMode slug={slug} />
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
