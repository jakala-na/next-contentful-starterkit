import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { Page } from '#/gql/graphql';
import PageLanding from '#/ui/pageLanding/pageLanding';

interface Props {
  params: {
    slug: string;
  };
}

const PageFieldsFragment = graphql(/* GraphQL */ `
  fragment PageItem on Page {
    sys {
      id
    }
    slug
    title
    content {
      ... on PageLanding {
        ...PageLandingItem
      }
    }
  }
`);

const PageBySlugDocument = graphql(/* GraphQL */ `
  query PageBySlug($slug: String!) {
    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        ...PageItem
      }
    }
  }
`);

const PageBySlug = async ({ params }: Props) => {
  // Get a Page entry by slug
  const result = await graphqlClient.request(PageBySlugDocument, {
    slug: params.slug
  });

  if (!result.pageCollection?.items.length) notFound();

  const page = result.pageCollection?.items[0] as Page;

  return (
    <>
      <h1>{page.title}</h1>
      <div>Id: {page.sys.id}</div>
      {page.content && <PageLanding pageLanding={page.content} />}
    </>
  );
};

export default PageBySlug;
