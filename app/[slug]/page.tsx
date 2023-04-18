import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { PageItemFragment } from '#/gql/graphql';
import { Page } from '#/ui/page';
import { ProductItemFragment } from '#/gql/graphql';
import { Product } from '#/ui/product';
interface Props {
  params: {
    slug: string;
  };
}

const PageBySlugQuery = graphql(/* GraphQL */ `
  query PageBySlug($slug: String!) {
    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
        ...PageItem
      }
    }
    productCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
        ...ProductItem
      }
    }
  }
`);

const PageBySlug = async ({ params }: Props) => {
  const { slug } = params;

  // Get a Page entry by slug
  const result = await graphqlClient.request(PageBySlugQuery, { slug });
  const entry =
    result.pageCollection?.items[0] || result.productCollection?.items[0];

  if (!entry) notFound();

  switch (entry.__typename) {
    case 'Page':
      return <Page key={(entry as PageItemFragment)?.sys.id} page={entry} />;
    case 'Product':
      return (
        <Product key={(entry as ProductItemFragment)?.sys.id} product={entry} />
      );
  }
};

export default PageBySlug;
