import { setStaticParamsLocale } from 'next-international/server';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

import { graphql, type ResultOf } from 'gql.tada';

import { ComponentRenderer } from '#/components/component-renderer';
import DebugMode from '#/components/debug-mode/debug-mode';
import { ComponentDuplexFieldsFragment } from '#/components/duplex-ctf/duplex-ctf';
import { ComponentHeroBannerFieldsFragment } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { LanguageDataSetter } from '#/components/language-data-provider/language-data-provider';
import { ComponentSEOFieldsFragment, getSeoMetadata } from '#/components/seo/seo-ctf';
import { TopicBusinessInfoFieldsFragment } from '#/components/topic-business-info/topic-business-info';
import { getTopicProductProps, TopicProductFragment } from '#/components/topic-product/topic-product';
import { addContentSourceMaps } from '#/lib/content-source-maps';
import { graphqlClient } from '#/lib/graphql-client';
import { getTaxonomyConcepts } from '#/lib/get-taxonomy-concepts';
import { getLocaleFromPath } from '#/locales/get-locale-from-path';
import { getStaticParams } from '#/locales/server';
import { TopicBusinessInfo } from '@repo/ui/components/topic-business-info';
import { ComponentProductTableClient } from '#/components/component-product-table/component-product-table-client';
import { type ComponentProductTableFragment } from '#/components/component-product-table/component-product-table';
import { getI18n } from '#/locales/server';

interface PageProps {
  params: Promise<Params>;
}

interface Params {
  id: string;
  locale: string;
}

const getConcept = async (id: string, locale: string, preview = false) => {
  const taxonomyConcepts = await getTaxonomyConcepts(process.env.CONTENTFUL_ORGANIZATION ?? '<missing organization>');
  return taxonomyConcepts.find((concept) => concept.sys.id === id);
};

const getEntries = async (conceptId: string, locale: string, preview = false) => {
  const entryQuery = graphql(
    `
      query TopicProductQuery($conceptId: String, $locale: String, $preview: Boolean) @contentSourceMaps {
        topicProductCollection(
          locale: $locale
          preview: $preview
          where: { contentfulMetadata: { concepts: { id_contains_all: [$conceptId] } } }
        ) {
          items {
            ...TopicProduct
          }
        }
      }
    `,
    [TopicProductFragment]
  );

  const response = await graphqlClient({ preview }).query(entryQuery, {
    locale,
    preview,
    conceptId,
  });

  const processedResponse = addContentSourceMaps(response);

  return processedResponse.data?.topicProductCollection?.items.filter((item) => {
    if (item === null) {
      return false;
    }
    const itemProps = getTopicProductProps({ data: item });
    return itemProps.linkedFrom?.pageCollection?.items.length;
  });
};

/*
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

  const pages = await graphqlClient({ preview: false }).query(pageQuery, {
    locale,
  });

  return (
    pages.data?.pageCollection?.items
      .filter((page) => page?.slug)
      .map((page) => ({
        slug: page?.slug === 'home' ? '/' : page?.slug,
      })) ?? []
  );
};
*/

/*
const getPageMetadata = async (slug: string, locale: string, preview = false): Promise<Metadata> => {
  const pageQuery = graphql(
    `
      query PageQuery($slug: String, $locale: String, $preview: Boolean) {
        pageCollection(locale: $locale, preview: $preview, limit: 1, where: { slug: $slug }) {
          items {
            seo {
              ...SEOFields
            }
            slugEn: slug(locale: "en-US")
            slugDe: slug(locale: "de-DE")
          }
        }
      }
    `,
    [ComponentSEOFieldsFragment]
  );

  const response = await graphqlClient({ preview }).query(pageQuery, {
    locale,
    preview,
    slug,
  });

  const pageMetadata = response.data?.pageCollection?.items[0];

  if (!pageMetadata) {
    notFound();
  }

  return {
    ...getSeoMetadata(pageMetadata.seo),
    // TODO: Extract this into i18n fragment and helper.
    alternates: {
      languages: {
        en: `/en/${(pageMetadata.slugEn ?? 'home') === 'home' ? '' : pageMetadata.slugEn ?? ''}`,
        de: `/de/${(pageMetadata.slugDe ?? 'home') === 'home' ? '' : pageMetadata.slugDe ?? ''}`,
      },
    },
  };
};
*/

export default async function TagPage(props: PageProps) {
  const params = await props.params;
  const { id, locale } = params;
  setStaticParamsLocale(locale);
  const t = await getI18n();

  const isDraftMode = (await draftMode()).isEnabled;

  const pageData = {
    slugEn: `tag/${id}`,
    slugDe: `tag/${id}`,
  };

  if (!id) {
    notFound();
  }

  const concept = await getConcept(id, locale, isDraftMode);

  if (!concept) {
    notFound();
  }

  const entries = await getEntries(concept.sys.id, getLocaleFromPath(locale), isDraftMode);

  const productTableData: ResultOf<typeof ComponentProductTableFragment> = {
    __typename: 'ComponentProductTable',
    sys: {
      id: 'no-id',
    },
    headline: t('products'),
    subline: entries?.length ? null : t('no products'),
    productsCollection: {
      items: entries ?? [],
    },
  };

  const body = (
    <div>
      <ComponentProductTableClient data={productTableData} />
    </div>
  );

  return (
    <>
      <LanguageDataSetter
        data={{
          ...(pageData.slugEn && { en: pageData.slugEn }),
          ...(pageData.slugDe && { de: pageData.slugDe }),
        }}
      />
      <TopicBusinessInfo
        name={concept.prefLabel['en-US'] ?? null}
        shortDescription={concept.definition ? concept.definition['en-US'] : null}
        body={body}
      />
    </>
  );
}

// export async function generateMetadata(props: PageProps): Promise<Metadata> {
//   const params = await props.params;
//   const { locale } = params;
//   const slug = params.slug?.join('/') ?? 'home';
//   const { isEnabled: isDraftMode } = await draftMode();
//   return getPageMetadata(slug, getLocaleFromPath(locale), isDraftMode);
//   return {};
// }

export async function generateStaticParams() {
  // Teach Typescript what our locale segment name is.
  const params = getStaticParams() as { locale: string }[];
  const returnData: Params[] = [];
  const taxonomyConcepts = await getTaxonomyConcepts(process.env.CONTENTFUL_ORGANIZATION ?? '<missing organization>');
  for await (const locale of params) {
    for (const concept of taxonomyConcepts) {
      returnData.push({ id: concept.sys.id, locale: locale.locale });
    }
  }
  return returnData;
}

export const revalidate = 120;
