import { type FragmentOf, graphql, readFragment } from 'gql.tada';

export const getTopicProductFeatureProps = ({ data: fragmentData }: TopicProductFeatureProps) => {
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
  data: FragmentOf<typeof TopicProductFeatureFragment>;
}

export function TopicProductFeature(props: TopicProductFeatureProps) {
  const data = readFragment(TopicProductFeatureFragment, props.data);
  return <div>TopicProductFeature id: {data.sys.id}</div>;
}
