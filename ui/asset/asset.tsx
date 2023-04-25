import { graphql } from '#/gql';

export const AssetFieldsFragment = graphql(/* GraphQL */ `
  fragment AssetItem on Asset {
    sys {
      ...SysItem
    }
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
`);
