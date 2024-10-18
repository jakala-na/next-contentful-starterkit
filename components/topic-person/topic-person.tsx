import { FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicPersonClient } from './topic-person-client';

export const ComponentTopicPersonFieldsFragment = graphql(
  `
    fragment ComponentTopicPerson on TopicPerson {
      __typename
      sys {
        id
      }
      name
      website
      location
      cardStyle
      bio {
        json
      }
      avatar {
        ...AssetFields
      }
    }
  `,
  [AssetFieldsFragment]
);

export type TopicBusinessInfoProps = {
  data: FragmentOf<typeof ComponentTopicPersonFieldsFragment>;
};

export const TopicPerson: React.FC<TopicBusinessInfoProps> = (props) => {
  const data = readFragment(ComponentTopicPersonFieldsFragment, props.data);
  return <TopicPersonClient data={data} />;
};
