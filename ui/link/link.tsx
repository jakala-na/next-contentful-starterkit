import { FragmentType, graphql, useFragment } from "#/gql";
import { LinkFieldsFragment } from "#/gql/graphql";
import { default as NextLink } from "next/link";

const LinkFields = graphql(/* GraphQL */ `
  fragment LinkFields on MenuLink {
    sys {
      id
    }
    linkUrl
    linkText
    linkReference {
      title
      slug
    }
  }
`);

const slugToUrl = (slug: string) => `/${slug}`;

const getLinkProps = (link: LinkFieldsFragment) => {
  const { linkText, linkUrl, linkReference } = link;
  return {
    linkText: linkReference?.title ?? linkText,
    linkUrl: (linkReference?.slug && slugToUrl(linkReference?.slug)) ?? linkUrl,
  };
};

type LinkProps = {
  link: FragmentType<typeof LinkFields>;
};

const Link = (props: LinkProps) => {
  const link = useFragment(LinkFields, props.link);
  const { linkUrl, linkText } = getLinkProps(link);
  if (!linkUrl) return null;
  return <NextLink href={linkUrl}>{linkText}</NextLink>;
};

export default Link;
