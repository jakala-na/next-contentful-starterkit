// import { graphqlClient } from '#/lib/graphqlClient';
// import { graphql } from '#/gql';
// import Link from 'next/link';
// import { Converter } from 'showdown';
// import { getPermalink } from '#/ui/blogPost';

// export const revalidate = 3;

// export const dynamicParams = false;

// const converter = new Converter();

// const BlogPostsListQuery = graphql(/* GraphQL */ `
//   query BlogPostsList {
//     blogPostCollection(limit: 1000, preview: false) {
//       items {
//         ...BlogPostItem
//         sys {
//           id
//         }
//       }
//     }
//   }
// `);

interface Props {
  children: React.ReactNode;
  postList: React.ReactNode;
  currentPost: React.ReactNode;
}

const Page = ({ children, postList, currentPost }: Props) => {
  // Get the list of Blog Posts
  // const result = await graphqlClient.request(BlogPostsListQuery);
  // const posts = result.blogPostCollection?.items;

  return (
    <>
      <h1>Blog</h1>
      <div
        style={{
          minHeight: '1em',
          backgroundColor: 'lightgreen',
          padding: '1em'
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          minHeight: '1em',
          backgroundColor: 'lightblue',
          padding: '1em'
        }}
      >
        <div
          style={{
            flexBasis: '33%',
            minHeight: '1em',
            backgroundColor: 'yellow'
          }}
        >
          {postList}
        </div>
        <div
          style={{
            flexBasis: '67%',
            paddingLeft: '1em',
            minHeight: '1em',
            backgroundColor: 'orange'
          }}
        >
          {currentPost}
        </div>
      </div>
    </>
  );
};

export default Page;
