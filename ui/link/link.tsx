import { FragmentType, graphql, useFragment } from '#/gql';
import { LinkItemFragment } from '#/gql/graphql';
import { default as NextLink } from 'next/link';

const LinkFieldsFragment = graphql(/* GraphQL */ `
  fragment LinkItem on MenuLink {
    sys {
      id
      ...SysItem
    }
    linkUrl
    linkText
    linkReference {
      ... on Page {
        title
        slug
      }
      ... on Product {
        title
        slug
      }
    }
  }
`);

const slugToUrl = (slug: string) => `/${slug}`;

const getLinkProps = (link: LinkItemFragment) => {
  const { linkText, linkUrl, linkReference } = link;
  return {
    linkText: linkReference?.title ?? linkText,
    linkUrl: (linkReference?.slug && slugToUrl(linkReference?.slug)) ?? linkUrl
  };
};

export type LinkProps = {
  link: FragmentType<typeof LinkFieldsFragment>;
};

const Link = (props: LinkProps) => {
  const link = useFragment(LinkFieldsFragment, props.link);
  const { linkUrl, linkText } = getLinkProps(link);
  if (!linkUrl) return null;
  return <NextLink href={linkUrl}>{linkText}</NextLink>;
};

export default Link;
