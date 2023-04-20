import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { Page } from '#/ui/page';
import { Product } from '#/ui/product';

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
  const componentTypes = {
    Page,
    Product
  };

  // Get a Page entry by slug
  const data = await graphqlClient.request(EntryBySlugQuery, { slug });

  const result = Object.keys(data)
    .map((collectionKey) => {
      return data[collectionKey].items.map((entry) => {
        const typename = entry.__typename,
          ComponentName = componentTypes[typename],
          paramName = typename.charAt(0).toLowerCase() + typename.slice(1),
          props = { [`${paramName}`]: entry };
        return <ComponentName key={entry.sys.id} {...props} />;
      });
    })
    .flat();

  if (!result.length) notFound();

  return result;

  // const entry =
  //   result.pageCollection?.items[0] || result.productCollection?.items[0];

  // if (!entry) notFound();

  // switch (entry.__typename) {
  //   case 'Page':
  //     return <Page page={entry} />;
  //   case 'Product':
  //     return <Product product={entry} />;
  // }
};

export default EntryBySlug;
