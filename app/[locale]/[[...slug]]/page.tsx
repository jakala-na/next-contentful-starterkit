import { Metadata } from 'next';
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
import { LanguageDataSetter } from '#/components/language-data-provider/language-data-setter';
import { graphqlClient } from '#/lib/graphqlClient';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';
import { getStaticParams } from '#/locales/server';

type PageProps = {
  params: { slug: string[]; locale: string };
};

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
            slugEn: slug(locale: "en-US")
            slugDe: slug(locale: "de-DE")
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

const getPageSlugs = async (locale: string) => {
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
    locale: locale,
  });

  return (
    pages?.data?.pageCollection?.items
      .filter((page) => page?.slug)
      .map((page) => ({
        slug: page?.slug === 'home' ? '/' : page?.slug,
      })) || []
  );
};

const getAlternateSlugs = async (slug: string, locale: string) => {
  const pageQuery = graphql(`
    query PageQuery($slug: String, $locale: String, $preview: Boolean) {
      pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
        items {
          slugEn: slug(locale: "en-US")
          slugDe: slug(locale: "de-DE")
        }
      }
    }
  `);

  return (
    await graphqlClient(false).query(pageQuery, {
      locale,
      slug,
    })
  ).data?.pageCollection?.items?.[0];
};

export default async function LandingPage({ params }: PageProps) {
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
      <LanguageDataSetter
        data={{
          ...(pageData?.slugEn && pageData.slugEn !== 'home' && { en: pageData.slugEn }),
          ...(pageData?.slugDe && pageData.slugDe !== 'home' && { de: pageData.slugDe }),
        }}
      />
      {topComponents ? <ComponentRenderer data={topComponents} /> : null}
      {pageContent ? <ComponentRenderer data={pageContent} /> : null}
    </div>
  );
}

export const revalidate = 120;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  const slug = params.slug?.join('/') ?? 'home';
  const data = await getAlternateSlugs(slug, getLocaleFromPath(locale));
  if (data) {
    return {
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/${data.slugEn === 'home' ? '' : data.slugEn}`,
          de: `${process.env.NEXT_PUBLIC_BASE_URL}/de/${data.slugDe === 'home' ? '' : data.slugDe}`,
        },
      },
    };
  }
  return {};
}

export async function generateStaticParams() {
  const params = getStaticParams();
  const returnData: Array<{ slug?: string[]; locale: string }> = [];
  for await (const locale of params) {
    const slugs = (await getPageSlugs(getLocaleFromPath(locale.locale))).map((page) => ({
      slug: page?.slug?.split('/'),
    }));
    for (const slug of slugs) {
      returnData.push({ slug: slug.slug, locale: locale.locale });
    }
  }
  return returnData;
}
