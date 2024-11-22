import { FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicPersonClient } from './topic-person-client';

export const TopicPersonFieldsFragment = graphql(
  `
    fragment TopicPerson on TopicPerson {
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

export type TopicPersonProps = {
  data: FragmentOf<typeof TopicPersonFieldsFragment & Record<string, any>>;
};

export const TopicPerson: React.FC<TopicPersonProps> = (props) => {
  const data = readFragment(TopicPersonFieldsFragment, props.data);
  return <TopicPersonClient data={data} />;
};
