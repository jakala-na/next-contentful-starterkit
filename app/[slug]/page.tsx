import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { PageItemFragment } from '#/gql/graphql';
import { Page } from '#/ui/page';

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
  const { slug } = params;

  // Get a Page entry by slug
  const result = await graphqlClient.request(PageBySlugQuery, { slug });
  const page = result.pageCollection?.items[0];

  if (!page) notFound();

  return <Page key={(page as PageItemFragment)?.sys.id} page={page} />;
};

export default PageBySlug;
