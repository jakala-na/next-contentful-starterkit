import { graphqlClient } from '#/lib/graphqlClient';
import { BlogPostsListQuery, BlogPostCard } from '#/ui/blogPost';
import { BlogPostItemFragment, SysItemFragment } from '#/gql/graphql';

// export const revalidate = 3;
// export const dynamicParams = false;

const Page = async () => {
  // Get the list of Blog Posts
  const result = await graphqlClient.request(BlogPostsListQuery);
  const posts = result.blogPostCollection?.items;

  return (
    <>
      <h1>Blog Posts</h1>
      {posts ? (
        posts.map(
          (post) =>
            post && (
              <BlogPostCard
                key={((post as BlogPostItemFragment).sys as SysItemFragment).id}
                blogPost={post}
              />
            )
        )
      ) : (
        <p>No blog posts yet.</p>
      )}
    </>
  );
};

export default Page;
