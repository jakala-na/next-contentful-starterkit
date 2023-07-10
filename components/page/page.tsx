import { graphql } from "#/gql";

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

const Page = () => <>{"Page"}</>;

export default Page;
