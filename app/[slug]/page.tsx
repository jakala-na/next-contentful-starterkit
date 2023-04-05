import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';

interface Params {
  slug: string;
}

interface Props {
  params: Params;
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

const Page = async (props: Props) => {
  const { params } = props;

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

  const page = pageData.pageCollection?.items[0]

  return (
    <h1>{page ? page.title : '404: Not found'}</h1>
  )
};

export default Page;
