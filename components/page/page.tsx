import { FragmentType, getFragmentData, graphql } from "#/gql";
import { default as NextLink } from "next/link";

export const PageLinkFieldsFragment = graphql(/* GraphQL */ `
  fragment PageLinkFields on Page {
    __typename
    slug
    sys {
      id
    }
    pageName
    pageContent(locale: $locale, preview: $preview) {
      ... on Entry {
        __typename
        sys {
          id
        }
      }
    }
  }
`);

export interface PageLinkProps {
  data: FragmentType<typeof PageLinkFieldsFragment>;
  children?: React.ReactNode;
  [key: string]: any;
}

export const getPageLinkProps = ({
  data: fragmentData,
  children,
  ...props
}: PageLinkProps) => {
  const data = getFragmentData(PageLinkFieldsFragment, fragmentData);

  return {
    href: `/${data.slug}`,
    as: `/${data.slug}`,
    children: children ?? data.pageName,
    ...props,
  };
};

export const getPageLinkChildProps = (props: PageLinkProps) => {
  const linkProps = getPageLinkProps(props);

  return {
    ...linkProps,
    children: <NextLink {...linkProps} />,
    asChild: true,
  };
};

const Page = () => <>{"Page"}</>;

export default Page;
