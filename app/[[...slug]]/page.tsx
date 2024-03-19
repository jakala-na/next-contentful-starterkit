import { ComponentRenderer } from "#/components/component-renderer";
import { graphql } from "#/gql";
import { graphqlClient } from "#/lib/graphqlClient";
import { draftMode } from "next/headers";

const getPage = async (slug: string, locale: string, preview = false) => {
  console.log('URA!');
  // const pageQuery = graphql(/* GraphQL */ `
  //   query PageQuery($slug: String, $locale: String, $preview: Boolean) {
  //     pageCollection(
  //       locale: $locale
  //       preview: $preview
  //       limit: 1
  //       where: { slug: $slug }
  //     ) {
  //       items {
  //         topSectionCollection(limit: 10) {
  //           items {
  //             ...ComponentHeroBannerFields
  //             ...ComponentDuplexFields
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const pageQuery = graphql(/* GraphQL */ `query PageQuery {
  //   all_alex_test(where: {url: "/home"}) {
  //     total
  //     items {
  //       title
  //       system {
  //         created_at
  //         updated_at
  //       }
  //       url
  //       flexible {
  //         description
  //         title
  //       }
  //       json_rte {
  //         json
  //       }
  //       markdown
  //       rich_text_editor
  //     }
  //   }
  // }`);

  const pageQuery = /* GraphQL */ `query PageQuery {
    all_alex_test(where: {url: "/home"}) {
      total
      items {
        title
        system {
          created_at
          updated_at
        }
        url
        flexible {
          description
          title
        }
        json_rte {
          json
        }
        markdown
        rich_text_editor
      }
    }
  }`;

  return (
    await graphqlClient(preview).request(pageQuery, {
      locale,
      preview,
      slug,
    })
  ).pageCollection?.items?.[0];
};

export default async function LandingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug?.join("/") ?? "home";

  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPage(slug, "en-US", isDraftMode);
  console.log('PAGE DATA', pageData);

  const topComponents = pageData?.topSectionCollection?.items;

  return (
    <div>
      <>Page slug: {slug}</>
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
    </div>
  );
}
