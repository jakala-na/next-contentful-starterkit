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

const AllSlugsQuery = graphql(/* GraphQL */ `
  query AllSlugs {
    pageCollection(limit: 1000, preview: false) {
      items {
        __typename
        slug
      }
    }
    productCollection(limit: 1000, preview: false) {
      items {
        __typename
        slug
      }
    }
  }
`);

type Time = {
  unixtime: number;
};

// export const revalidate = 3;

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const result = await graphqlClient.request(AllSlugsQuery);
  let slugs: string[] = [];
  result.pageCollection?.items.forEach((item) => {
    if (!item?.slug) return;
    slugs.push(item.slug);
  });
  result.productCollection?.items.forEach((item) => {
    if (!item?.slug) return;
    slugs.push(item.slug);
  });
  return slugs.map((slug) => ({ slug }));
};

const EntryBySlug = async ({ params }: Props) => {
  const { slug } = params;
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Chicago',
    {
      next: {
        revalidate: 3
      }
    }
  );
  const datetime: Time = await res.json();

  // Get a Page entry by slug
  const result = await graphqlClient.request(EntryBySlugQuery, { slug });
  const entry =
    result.pageCollection?.items[0] || result.productCollection?.items[0];

  if (!entry) notFound();

  switch (entry.__typename) {
    case 'Page':
      return (
        <>
          <p>EntryBySlug time: {datetime.unixtime}</p>
          {/* @ts-expect-error Async Server Component */}
          <Page page={entry} />;
        </>
      );
    case 'Product':
      return <Product product={entry} />;
  }
};

export default EntryBySlug;
