import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { PageItemFragment, ProductItemFragment } from '#/gql/graphql';
import { Page } from '#/ui/page';
import { Product } from '#/ui/product';

interface Props {
  params: {
    slug: string;
  };
}

const EntryBySlugQuery = graphql(/* GraphQL */ `
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

const EntryBySlug = async ({ params }: Props) => {
  const { slug } = params;

  // Get a Page entry by slug
  const result = await graphqlClient.request(EntryBySlugQuery, { slug });
  const entry =
    result.pageCollection?.items[0] || result.productCollection?.items[0];

  if (!entry) notFound();

  switch (entry.__typename) {
    case 'Page':
      return <Page page={entry} />;
    case 'Product':
      return (
        <Product product={entry} />
      );
  }
};

export default EntryBySlug;
