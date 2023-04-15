// import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
// import { Page } from '#/ui/page';
import { PageList } from '#/ui/page';

interface Props {
  params: {
    slug: string;
  };
}

const PageBySlugQuery = graphql(/* GraphQL */ `
  query PageBySlug($slug: String!) {
    ...PageBySlugQueryFragment
  }
`);

const PageBySlug = async ({ params }: Props) => {
  const { slug } = params;

  // Get a Page entry by slug
  const result = await graphqlClient.request(PageBySlugQuery, { slug });

  // if (!result.pageCollection?.items.length) notFound();

  // const page = result.pageCollection?.items[0];

  // if (!page) notFound();

  // return <Page page={page} />;
  return <PageList query={result} />;
};

export default PageBySlug;
