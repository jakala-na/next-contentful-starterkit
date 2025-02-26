import { type FragmentOf, type ResultOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicProductFeatureFragment } from '../topic-product-feature/topic-product-feature';
import { TopicProductClient } from './topic-product-client';
import { TaxonomyConceptFragment, type TaxonomyConceptAddFieldsProps } from '../taxonomy-concept-ctf';

export const TopicProductFragment = graphql(
  `
    fragment TopicProduct on TopicProduct {
      __typename
      sys {
        id
      }
      contentfulMetadata {
        concepts {
          ...TaxonomyConcept
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
  [TaxonomyConceptFragment, AssetFieldsFragment, TopicProductFeatureFragment]
);

export type TopicProductAddFieldsProps = {
  contentfulMetadata: {
    concepts: (TaxonomyConceptAddFieldsProps | null)[] | null;
  };
} & ResultOf<typeof TopicProductFragment>;

export interface TopicProductProps {
  data: FragmentOf<typeof TopicProductFragment>;
}

export function TopicProduct(props: TopicProductProps) {
  const data = readFragment(TopicProductFragment, props.data);
  return <TopicProductClient data={data} />;
}
