import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import Link from 'next/link';

// export const revalidate = 3;

// export const dynamicParams = false;

// export const generateStaticParams = async () => {
//   const result = await graphqlClient.request(AllSlugsQuery);
//   const slugs = [
//     result.pageCollection?.items.map((item) => item?.slug),
//     result.productCollection?.items.map((item) => item?.slug),
//     result.blogPostCollection?.items.map((item) => item?.slug)
//   ]
//     .flat()
//     .filter((slug) => slug)
//     .map((slug) => ({ slug }));

//   return slugs;
// };

const BlogPostsListQuery = graphql(/* GraphQL */ `
  query BlogPostsList {
    blogPostCollection(limit: 1000, preview: false) {
      items {
        ...BlogPostItem
      }
    }
  }
`);

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = params;

  // Get the list of Blog Posts
  const result = await graphqlClient.request(BlogPostsListQuery);
  const posts = result.blogPostCollection?.items;

  return (
    <>
      <h1>Blog Posts</h1>
      {posts
        ? posts.map((post) => {
            if (!post) return;
            return (
              <h2 key={post.sys.id}>
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h2>
            );
          })
        : 'No blog posts yet.'}
    </>
  );
};

export default Page;
