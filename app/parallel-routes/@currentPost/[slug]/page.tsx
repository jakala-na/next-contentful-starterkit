import { notFound } from 'next/navigation';
import { graphqlClient } from '#/lib/graphqlClient';
import { BlogPost } from '#/ui/blogPost';
import { Product } from '#/ui/product';
import { AllSlugsQuery, EntryBySlugQuery } from '#/app/[slug]/page';

type Time = {
  unixtime: number;
};

export const revalidate = 5;
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const result = await graphqlClient.request(AllSlugsQuery);
  const slugs = [
    result.blogPostCollection?.items,
    result.productCollection?.items
  ]
    .flat()
    .map((item) => item?.slug)
    .filter((slug) => slug)
    .map((slug) => ({ slug }));

  return slugs;
};

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = params;

  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Vancouver'
  );
  const datetime: Time = await res.json();

  // Get an entry by slug
  const result = await graphqlClient.request(EntryBySlugQuery, { slug });
  const entry =
    result.blogPostCollection?.items[0] || result.productCollection?.items[0];

  if (!entry) notFound();

  switch (entry.__typename) {
    case 'BlogPost':
      return (
        <>
          Time: {datetime.unixtime}
          <BlogPost blogPost={entry} />
        </>
      );
    case 'Product':
      return (
        <>
          Time: {datetime.unixtime}
          <Product product={entry} />
        </>
      );
  }
};

export default Page;
