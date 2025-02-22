import { setStaticParamsLocale } from 'next-international/server';
import { draftMode } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

import { graphql } from 'gql.tada';

import { ComponentRenderer } from '#/components/component-renderer';
import { client } from '#/lib/drupal/client';
import { type SearchParams } from 'next/dist/server/request/search-params';
import { NodePageFragment } from '#/components/node-page/node-page';
import { type DataWithTypename } from '#/components/component-renderer/component-renderer';
import DebugMode from '#/components/debug-mode/debug-mode';

interface PageProps {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}

interface Params {
  slug?: string[];
  locale: string;
}

const getRoute = async (path: string, locale: string, preview = false) => {
  const pageQuery = graphql(
    `
      query Route($path: String!, $locale: String!) {
        route(path: $path, langcode: $locale) {
          __typename
          ... on RouteRedirect {
            url
          }
          ... on RouteInternal {
            entity {
              __typename
              ...NodePage
            }
          }
        }
      }
    `,
    [NodePageFragment]
  );

  const response = await (
    await client(preview)
  ).query(pageQuery, {
    path,
    locale,
  });

  return response;
};

export default async function Page(props: PageProps) {
  const params = await props.params;

  const { locale } = params;
  setStaticParamsLocale(locale);
  let path = params.slug?.join('/') ?? 'home';

  // Pass preview token to GraphQL Compose Preview.
  // TODO: Dynamic API breaks static caching, move to draftMode data.
  // const searchParams = await props.searchParams;
  // if (searchParams.token) {
  //   path = `${path}?token=${searchParams.token}`;
  // }

  const isDraftMode = (await draftMode()).isEnabled;

  const routeData = await getRoute(path, locale, isDraftMode);

  if (routeData.data?.route?.__typename === 'RouteRedirect') {
    redirect(routeData.data.route.url);
  }

  const routeEntity = routeData.data?.route?.__typename === 'RouteInternal' ? routeData.data.route.entity : null;

  if (!routeEntity) {
    notFound();
  }

  return (
    <div>
      <DebugMode slug={path} />
      <ComponentRenderer data={routeEntity as DataWithTypename} />
    </div>
  );
}

export async function generateStaticParams() {
  // Fetch the paths for the first 50 articles and pages.
  // We'll fall back to on-demand generation for the rest.
  const response = await (
    await client(false)
  ).query(
    graphql(`
      query allNodePaths {
        nodeArticles(first: 50) {
          nodes {
            translations {
              langcode {
                id
              }
              path
            }
          }
        }
        nodePages(first: 50) {
          nodes {
            translations {
              langcode {
                id
              }
              path
            }
          }
        }
      }
    `),
    []
  );

  // for await (const locale of params) {
  return [...(response.data?.nodeArticles.nodes ?? []), ...(response.data?.nodePages.nodes ?? [])].flatMap((node) =>
    node.translations.map((translation) => ({
      locale: translation.langcode.id,
      slug: (translation.path ?? '').split('/').filter(Boolean).slice(1), // slice the locale from the path.
    }))
  );
}

// Configure ISR.
export const revalidate = 120;
