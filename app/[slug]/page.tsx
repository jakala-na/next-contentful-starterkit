import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { ProductList, ProductBySlugQuery } from '#/ui/product';
import { PageList, PageBySlugQuery } from '#/ui/page';

interface Props {
  params: {
    slug: string;
  };
}

const EntryBySlugQuery = graphql(/* GraphQL */ `
  query EntryBySlug($slug: String!) {
    ...PageBySlugQuery
    ...ProductBySlugQuery
  }
`);

const EntryBySlug = async ({ params }: Props) => {
  const { slug } = params;

  // Get a Page entry by slug
  const data = await graphqlClient.request(EntryBySlugQuery, { slug });

  const found = Object.keys(data).some((collectionName) => {
    if (data[collectionName].items.length) {
      return true;
    }
  });

  if (!found) notFound();

  return (
    <>
      <PageList query={data} fragment={PageBySlugQuery} />
      <ProductList query={data} fragment={ProductBySlugQuery} />
    </>
  );
};

export default EntryBySlug;
