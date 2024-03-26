import { ComponentRenderer } from '#/components/component-renderer'
import { graphql } from '#/lib/graphql'
import { graphqlClient } from '#/lib/graphqlClient'
import { draftMode } from 'next/headers'

const getPage = async (slug: string, locale: string, preview = false) => {
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
  // `);@TODO

  const pageQuery = graphql(/* GraphQL */ `
    query PageQuery {
      all_page(where: { url: "/" }) {
        items {
          page_components {
            ... on PagePageComponentsHeroBanner {
              __typename
              hero_banner {
                banner_description
                banner_title
                bg_color
                text_color
              }
            }
            ... on PagePageComponentsContactDetails {
              __typename
              contact_details {
                address
                email
                phone
              }
            }
            ... on PagePageComponentsSectionWithBuckets {
              __typename
              section_with_buckets {
                bucket_tabular
                description
                title_h2
              }
            }
            ... on PagePageComponentsSection {
              __typename
              section {
                title_h2
                image_alignment
                description
              }
            }
            ... on PagePageComponentsSectionWithHtmlCode {
              __typename
              section_with_html_code {
                title
                html_code_alignment
                html_code
              }
            }
            ... on PagePageComponentsSectionWithCards {
              __typename
              section_with_cards {
                cards {
                  title_h3
                }
              }
            }
            ... on PagePageComponentsFromBlog {
              __typename
            }
            ... on PagePageComponentsOurTeam {
              __typename
            }
            ... on PagePageComponentsWidget {
              __typename
            }
          }
          seo {
            canonical_url
            description
            no_follow
            title
            no_index
          }
          title
          url
          system {
            updated_at
            created_at
          }
        }
      }
    }
  `)

  return (
    (
      await graphqlClient(preview).request(pageQuery, {
        locale,
        preview,
        slug,
      })
    ).all_page ?? null
  )
}

export default async function LandingPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const slug = params.slug?.join('/') ?? 'home'

  const { isEnabled: isDraftMode } = draftMode()

  const pageData = await getPage(slug, 'en-US', isDraftMode)
  console.log('PAGE DATA', JSON.stringify(pageData, null, 2))

  const topComponents = pageData?.items

  return (
    <div>
      <>
        Page slug: {slug} - {pageData?.items?.[0]?.title}
      </>
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
    </div>
  )
}
