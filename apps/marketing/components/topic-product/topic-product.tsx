import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicProductFeatureFragment } from '../topic-product-feature/topic-product-feature';
import { TopicProductClient } from './topic-product-client';

export const TopicProductFragment = graphql(
  `
    fragment TopicProduct on TopicProduct {
      __typename
      sys {
        id
      }
      contentfulMetadata {
        concepts {
          id
        }
      }
      name
      description {
        json
      }
      featuredImage {
        ...AssetFields
      }
      featuresCollection {
        items {
          ...TopicProductFeature
        }
      }
      price
    }
  `,
  [AssetFieldsFragment, TopicProductFeatureFragment]
);

export interface TopicProductProps {
  data: FragmentOf<typeof TopicProductFragment> & Record<string, any>;
}

export function TopicProduct(props: TopicProductProps) {
  const data = readFragment(TopicProductFragment, props.data);
  return <TopicProductClient data={data} />;
}
