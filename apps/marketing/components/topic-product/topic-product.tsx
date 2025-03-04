import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicProductFeatureFragment } from '../topic-product-feature/topic-product-feature';
// eslint-disable-next-line import/no-cycle -- TODO: refactor
import { TopicProductClient } from './topic-product-client';
import { TaxonomyConceptFragment, TaxonomyConcept } from '../taxonomy-concept/taxonomy-concept';

export const getTopicProductProps = ({ data: fragmentData }: TopicProductProps) => {
  const data = readFragment(TopicProductFragment, fragmentData);
  return data;
};

// It is not clear why, but the `allowedLocales` parameter requires the
// fallback locale rather than the actual current locale. We are specifying
// both below, just to be safe (!), but perhaps in the future we'll only need
// the current locale.
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
      linkedFrom(allowedLocales: [$fallbackLocale, $locale]) {
        pageCollection(limit: 1) {
          items {
            sys {
              id
            }
            slug
          }
        }
      }
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
      // Unmask the fragment to access the concept id, to use as a key.
      const concept = readFragment(TaxonomyConceptFragment, fragmentData);
      return <TaxonomyConcept key={concept.id} data={fragmentData} />;
    });

  return <TopicProductClient data={data} tags={tags} />;
}
