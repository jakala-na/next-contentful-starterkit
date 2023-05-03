import { graphqlClient } from '#/lib/graphqlClient';
import { graphql } from '#/gql';
import Link from 'next/link';
import { Converter } from 'showdown';
import { getPermalink } from '#/ui/blogPost';

// export const revalidate = 3;

// export const dynamicParams = false;

const converter = new Converter();

const BlogPostsListQuery = graphql(/* GraphQL */ `
  query BlogPostsList {
    blogPostCollection(limit: 1000, preview: false) {
      items {
        ...BlogPostItem
        sys {
          id
        }
      }
    }
  }
`);

const Page = async () => {
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
              <div key={post.sys.id}>
                <h2>
                  <Link href={`/parallel-routes/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                {post.summary && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(post.summary)
                    }}
                  />
                )}
              </div>
            );
          })
        : 'No blog posts yet.'}
    </>
  );
};

export default Page;
