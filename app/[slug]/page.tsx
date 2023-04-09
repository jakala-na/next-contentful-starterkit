import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { Page } from '#/gql/graphql';
import ComposePage from '#/ui/page/page';

interface Props {
  params: {
    slug: string;
  };
}

const PageBySlugQuery = graphql(/* GraphQL */ `
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
  const result = await graphqlClient.request(PageBySlugQuery, {
    slug: params.slug
  });

  if (!result.pageCollection?.items.length) notFound();

  const page = result.pageCollection?.items[0] as Page;

  return (
    <>
      <ComposePage page={page} />
    </>
  );
};

export default PageBySlug;
