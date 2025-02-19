import { type FragmentOf, graphql, readFragment } from 'gql.tada';

export const getTopicProductFeatureProps = ({ data: fragmentData, ...props }: TopicProductFeatureProps) => {
  const data = readFragment(TopicProductFeatureFragment, fragmentData);
  return data;
};

export const TopicProductFeatureFragment = graphql(`
  fragment TopicProductFeature on TopicProductFeature {
    __typename
    sys {
      id
    }
    name
    shortDescription {
      json
    }
    longDescription {
      json
    }
  }
`);

export interface TopicProductFeatureProps {
  data: FragmentOf<typeof TopicProductFeatureFragment> & Record<string, any>;
}
