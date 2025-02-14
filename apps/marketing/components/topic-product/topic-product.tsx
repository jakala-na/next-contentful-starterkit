import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicProductClient } from './topic-product-client';

export const TopicProductFieldsFragment = graphql(
  `
    fragment TopicProduct on TopicProduct {
      __typename
      sys {
        id
      }
      name
      description {
        json
      }
      featuredImage {
        ...AssetFields
      }
      price
    }
  `,
  [AssetFieldsFragment]
);

export interface TopicProductProps {
  data: FragmentOf<typeof TopicProductFieldsFragment>;
}

export function TopicProduct(props: TopicProductProps) {
  const data = readFragment(TopicProductFieldsFragment, props.data);
  return <TopicProductClient data={data} />;
}
