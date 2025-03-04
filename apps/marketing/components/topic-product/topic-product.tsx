import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicProductFeatureFragment } from '../topic-product-feature/topic-product-feature';
import { TopicProductClient } from './topic-product-client';
import { TaxonomyConceptFragment, TaxonomyConcept } from '../taxonomy-concept';

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

export interface TopicProductProps {
  data: FragmentOf<typeof TopicProductFragment>;
}

export function TopicProduct(props: TopicProductProps) {
  const data = readFragment(TopicProductFragment, props.data);
  const tags = data.contentfulMetadata.concepts
    .filter((fragmentData) => fragmentData !== null)
    .map((fragmentData) => {
      const concept = readFragment(TaxonomyConceptFragment, fragmentData);
      return <TaxonomyConcept key={concept.id} data={fragmentData} />;
    });

  return <TopicProductClient data={data} tags={tags} />;
}
