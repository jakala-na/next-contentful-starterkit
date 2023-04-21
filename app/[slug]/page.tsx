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

  const found = Object.keys(data).some((collectionName) => {
    if (data[collectionName].items.length) {
      return true;
    }
  });

  if (!found) notFound();

  return Object.keys(data).map((collectionKey) => {
    return data[collectionKey].items.map((entry) => {
      const typename = entry.__typename,
        ComponentName = componentTypes[typename],
        paramName = typename.charAt(0).toLowerCase() + typename.slice(1),
        props = { [`${paramName}`]: entry };
      return <ComponentName key={entry.sys.id} {...props} />;
    });
  });
};

export default EntryBySlug;
