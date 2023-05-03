import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import { BlogPost } from '#/ui/blogPost';

// export const revalidate = 3;

// export const dynamicParams = false;

const LatestBlogPostQuery = graphql(/* GraphQL */ `
  query LatestBlogPost {
    blogPostCollection(limit: 1, preview: false) {
      items {
        ...BlogPostItem
      }
    }
  }
`);

const Page = async () => {
  // Get the latest Blog Post
  const result = await graphqlClient.request(LatestBlogPostQuery);
  const post = result.blogPostCollection?.items[0];

  return (
    <>
      <h1>Latest Post</h1>
      {post ? <BlogPost blogPost={post} /> : 'No blog posts yet.'}
    </>
  );
};

export default Page;
