import Link from 'next/link';
import { FragmentType, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { BlogPostFieldsFragment } from './blogPost';
import { Converter } from 'showdown';

const converter = new Converter();

type BlogPostCardProps = {
  blogPost: FragmentType<typeof BlogPostFieldsFragment>;
};

const BlogPostCard = (props: BlogPostCardProps) => {
  const blogPost = useFragment(BlogPostFieldsFragment, props.blogPost);
  const sys = useFragment(SysFieldsFragment, blogPost.sys);
  const { slug, title, summary } = blogPost;

  return (
    <div id={sys.id}>
      <h2>
        <Link href={`/parallel-routes/${slug}`}>{title}</Link>
      </h2>
      {summary && (
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(summary)
          }}
        />
      )}
    </div>
  );
};

export default BlogPostCard;
