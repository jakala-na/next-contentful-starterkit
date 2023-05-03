// import { graphqlClient } from '#/lib/graphqlClient';
// import { graphql } from '#/gql';
// import { BlogPost } from '#/ui/blogPost';
import Link from 'next/link';

// export const revalidate = 3;

// export const dynamicParams = false;

// const LatestBlogPostQuery = graphql(/* GraphQL */ `
//   query LatestBlogPost {
//     blogPostCollection(limit: 1, preview: false) {
//       items {
//         ...BlogPostItem
//       }
//     }
//   }
// `);

const Page = () => {
  // Get the latest Blog Post
  // const result = await graphqlClient.request(LatestBlogPostQuery);
  // const post = result.blogPostCollection?.items[0];

  return (
    <>
      <h1>Blog Children</h1>
      <p>This is the children param.</p>
      <p>
        <Link href="/parallel-routes">Reset</Link>
      </p>
      <p>
        <Link href="/parallel-routes/foo">To Foo</Link>
      </p>
      <p>
        <Link href="/parallel-routes/bar">To Bar</Link>
      </p>
      <p>
        <Link href="/parallel-routes/baz">To Baz</Link>
      </p>
      <p>
        <Link href="/parallel-routes/posts">To Post List</Link>
      </p>
      <p>
        <Link href="/parallel-routes/products">To Product List</Link>
      </p>
    </>
  );
};

export default Page;
