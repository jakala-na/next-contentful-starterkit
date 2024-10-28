import { setStaticParamsLocale } from 'next-international/server';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { graphql } from 'gql.tada';

import { ComponentRenderer } from '#/components/component-renderer';
import DebugMode from '#/components/debug-mode/debug-mode';
import { ComponentDuplexFieldsFragment } from '#/components/duplex-ctf/duplex-ctf';
import { ComponentHeroBannerFieldsFragment } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { ComponentTopicBusinessInfoFieldsFragment } from '#/components/topic-business-info/topic-business-info';
import { addContentSourceMaps } from '#/lib/contentSourceMaps';
import { graphqlClient } from '#/lib/graphqlClient';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';
import { getStaticParams } from '#/locales/server';

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

export default async function LandingPage({ params }: { params: { slug: string[]; locale: string } }) {
  const { locale } = params;
  setStaticParamsLocale(locale);
  const slug = params.slug?.join('/') ?? 'home';

  const { isEnabled: isDraftMode } = draftMode();

  const pageData = await getPage(slug, getLocaleFromPath(locale), isDraftMode);

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
  const params = getStaticParams();
  const returnData: Array<{ slug?: string[]; locale: string }> = [];
  const slugs = (await getPageSlugs()).map((page) => ({
    slug: page?.slug?.split('/'),
  }));
  for (const locale of params) {
    for (const slug of slugs) {
      returnData.push({ slug: slug.slug, locale: locale.locale });
    }
  }
  return returnData;
}
