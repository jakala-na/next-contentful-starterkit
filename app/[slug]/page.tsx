import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { Page } from '#/gql/graphql';

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
  }
`);

const PageBySlug = async ({ params }: Props) => {
  // Get a Page entry by slug
  const pageQuery = graphql(/* GraphQL */ `
    query PageBySlug($slug: String!) {
      pageCollection(limit: 1, where: { slug: $slug }) {
        items {
          ...PageItem
        }
      }
    }
  `);

  const pageData = await graphqlClient.request(pageQuery, {
    slug: params.slug
  });

  if (!pageData.pageCollection?.items.length) notFound();

  const page = pageData.pageCollection?.items[0] as Page;

  return (
    <>
      <h1>{page.title}</h1>
      <div>Id: {page.sys.id}</div>
    </>
  );
};

export default PageBySlug;
