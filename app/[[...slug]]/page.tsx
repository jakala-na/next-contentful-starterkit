import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { graphql } from 'gql.tada';

import { ComponentRenderer } from '#/components/component-renderer';
import DebugMode from '#/components/debug-mode/debug-mode';
import { ComponentDuplexFieldsFragment } from '#/components/duplex-ctf/duplex-ctf';
import { ComponentHeroBannerFieldsFragment } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { ComponentSEOFieldsFragment } from '#/components/seo/seo-ctf';
import { ComponentTopicBusinessInfoFieldsFragment } from '#/components/topic-business-info/topic-business-info';
import { addContentSourceMaps } from '#/lib/contentSourceMaps';
import { graphqlClient } from '#/lib/graphqlClient';

const getPage = async (slug: string, locale: string, preview = false) => {
  const pageQuery = graphql(
    `
      query PageQuery($slug: String, $locale: String, $preview: Boolean) @contentSourceMaps {
        pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
          items {
            topSectionCollection(limit: 10) {
              items {
                ...ComponentHeroBannerFields
                ...ComponentDuplexFields
              }
            }
            pageContent {
              ...ComponentTopicBusinessInfo
            }
          }
        }
      }
    `,
    [ComponentHeroBannerFieldsFragment, ComponentDuplexFieldsFragment, ComponentTopicBusinessInfoFieldsFragment]
  );

  const response = await graphqlClient(preview).query(pageQuery, {
    locale,
    preview,
    slug,
  });

  const processedResponse = addContentSourceMaps(response);
  return processedResponse?.data?.pageCollection?.items?.[0];
};

const getPageMetadata = async (slug: string, locale: string, preview = false): Promise<Metadata> => {
  const pageQuery = graphql(
    `
      query PageQuery($slug: String, $locale: String, $preview: Boolean) {
        pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
          items {
            seo {
              ...SEOFields
            }
          }
        }
      }
    `,
    [ComponentSEOFieldsFragment]
  );

  const response = await graphqlClient(preview).query(pageQuery, {
    locale,
    preview,
    slug,
  });

  // @TODO: Fix typings for seoFields.
  const seoFields: any = response?.data?.pageCollection?.items?.[0]?.seo;

  return {
    ...(seoFields?.title && { title: seoFields.title }),
    ...(seoFields?.description && { description: seoFields.description }),
    ...(seoFields?.image && {
      openGraph: {
        images: [seoFields?.image.url],
      },
    }),
    ...((seoFields?.noFollow || seoFields?.noIndex) && {
      robots: {
        ...(seoFields?.noFollow && { follow: !seoFields.noFollow }),
        ...(seoFields?.noIndex && { index: !seoFields.noIndex }),
      },
    }),
  };
};

const getPageSlugs = async () => {
  const pageQuery = graphql(`
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

  const pages = await graphqlClient(false).query(pageQuery, {
    locale: 'en-US',
  });

  return (
    pages?.data?.pageCollection?.items
      .filter((page) => page?.slug)
      .map((page) => ({
        slug: page?.slug === 'home' ? '/' : page?.slug,
      })) || []
  );
};

export default async function LandingPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug?.join('/') ?? 'home';

  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPage(slug, 'en-US', isDraftMode);

  if (!pageData) {
    notFound();
  }

  const topComponents = pageData?.topSectionCollection?.items;
  const pageContent = pageData?.pageContent;

  return (
    <div>
      <DebugMode slug={slug} />
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
      {pageContent ? <ComponentRenderer data={pageContent} /> : null}
    </div>
  );
}

export const revalidate = 120;

export async function generateStaticParams() {
  return (await getPageSlugs()).map((page) => ({
    slug: page?.slug?.split('/'),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug?.join('/') ?? 'home';

  const { isEnabled: isDraftMode } = draftMode();

  const pageMetadata: Metadata = await getPageMetadata(slug, 'en-US', isDraftMode);

  if (!pageMetadata) {
    return notFound();
  }

  return pageMetadata;
}
