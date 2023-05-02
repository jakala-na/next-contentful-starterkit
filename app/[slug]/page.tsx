import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { Page } from '#/ui/page';
import { Product } from '#/ui/product';
import { BlogPost } from '#/ui/blogPost';

interface Props {
  params: {
    slug: string;
  };
}

const EntryBySlugQuery = graphql(/* GraphQL */ `
  query EntryBySlug($slug: String!) {
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
    blogPostCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
        ...BlogPostItem
      }
    }
  }
`);

const AllSlugsQuery = graphql(/* GraphQL */ `
  query AllSlugs {
    pageCollection(limit: 1000, preview: false) {
      items {
        slug
      }
    }
    productCollection(limit: 1000, preview: false) {
      items {
        slug
      }
    }
    blogPostCollection(limit: 1000, preview: false) {
      items {
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
  const slugs = [
    result.pageCollection?.items.map((item) => item?.slug),
    result.productCollection?.items.map((item) => item?.slug),
    result.blogPostCollection?.items.map((item) => item?.slug)
  ]
    .flat()
    .filter((slug) => slug)
    .map((slug) => ({ slug }));

  return slugs;
};

const EntryBySlug = async ({ params }: Props) => {
  const { slug } = params;
  // const res = await fetch(
  //   'http://worldtimeapi.org/api/timezone/America/Chicago',
  //   {
  //     next: {
  //       revalidate: 3
  //     }
  //   }
  // );
  // const datetime: Time = await res.json();

  // Get a Page entry by slug
  const result = await graphqlClient.request(EntryBySlugQuery, { slug });
  const entry =
    result.pageCollection?.items[0] ||
    result.productCollection?.items[0] ||
    result.blogPostCollection?.items[0] ||
    null;

  if (!entry) notFound();

  switch (entry.__typename) {
    case 'Page':
      return (
        <>
          {/* <p>EntryBySlug time: {datetime.unixtime}</p> */}
          {/* @ts-expect-error Async Server Component */}
          <Page page={entry} />
        </>
      );
    case 'Product':
      return <Product product={entry} />;
    case 'BlogPost':
      return <BlogPost blogPost={entry} />;
  }
};

export default EntryBySlug;
