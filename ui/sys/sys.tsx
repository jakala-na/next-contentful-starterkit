import { graphql } from '#/gql';

export const SysFieldsFragment = graphql(/* GraphQL */ `
  fragment SysItem on Sys {
    id
    spaceId
    environmentId
    publishedAt
    firstPublishedAt
    publishedVersion
  }
`);
