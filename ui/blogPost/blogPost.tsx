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

export const formatDate = (date: string) => {
  return new Date(date).toUTCString();
};

export const getPermalink = (slug: string) => {
  return `/blog/${slug}`;
};

type BlogPostProps = {
  blogPost: FragmentType<typeof BlogPostFieldsFragment>;
};

const BlogPost = (props: BlogPostProps) => {
  const blogPost = useFragment(BlogPostFieldsFragment, props.blogPost);
  const sys = useFragment(SysFieldsFragment, blogPost.sys);
  const { title, publishedDate, body } = blogPost;

  return (
    <>
      <h1>{title}</h1>
      <div>Id: {sys.id}</div>
      <div>Published: {formatDate(publishedDate)}</div>
      {body && <RichText json={body.json} />}
    </>
  );
};

export default BlogPost;
