import { graphqlClient } from '#/lib/graphqlClient';
import { LatestBlogPostQuery, BlogPost } from '#/ui/blogPost';

// export const revalidate = 3;
// export const dynamicParams = false;

const Page = async () => {
  // Get the latest Blog Post
  const result = await graphqlClient.request(LatestBlogPostQuery);
  const post = result.blogPostCollection?.items[0];

  return (
    <>
      <h1>Latest Post</h1>
      {post ? <BlogPost blogPost={post} /> : <p>No blog posts yet.</p>}
    </>
  );
};

export default Page;
