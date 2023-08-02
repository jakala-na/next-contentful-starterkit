import { FragmentType, getFragmentData, graphql } from "#/gql";

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

export const getPageLinkProps = (
  data: FragmentType<typeof PageLinkFieldsFragment>
) => {
  const fragment = getFragmentData(PageLinkFieldsFragment, data);

  return {
    href: `/${fragment.slug}`,
    as: `/${fragment.slug}`,
    children: fragment.pageName,
  };
};

const Page = () => <>{"Page"}</>;

export default Page;
