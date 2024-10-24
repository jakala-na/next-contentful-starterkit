import { graphql } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';

export const ComponentSEOFieldsFragment = graphql(
  `
    fragment SEOFields on Seo {
      __typename
      sys {
        id
      }
      title
      description
      noIndex
      noFollow
      image {
        ...AssetFields
      }
    }
  `,
  [AssetFieldsFragment]
);
