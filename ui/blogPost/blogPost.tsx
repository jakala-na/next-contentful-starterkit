import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { RichText } from '../richText';

const BlogPostFieldsFragment = graphql(/* GraphQL */ `
  fragment BlogPostItem on BlogPost {
    sys {
      ...SysItem
    }
    slug
    title
    publishedDate
    summary
    body {
      json
    }
  }
`);

type BlogPostProps = {
  blogPost: FragmentType<typeof BlogPostFieldsFragment>;
};

const BlogPost = (props: BlogPostProps) => {
  const blogPost = useFragment(BlogPostFieldsFragment, props.blogPost);
  const sys = useFragment(SysFieldsFragment, blogPost.sys);
  const { title, summary, body } = blogPost;

  return (
    <>
      <h1>{title}</h1>
      <div>Id: {sys.id}</div>
      {summary && <p>{summary}</p>}
      {body && <RichText json={body.json} />}
    </>
  );
};

export default BlogPost;
