import { type FragmentOf, graphql, readFragment } from 'gql.tada';

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

export interface TopicPersonProps {
  data: FragmentOf<typeof TopicPersonFieldsFragment>;
}

export function TopicPerson(props: TopicPersonProps) {
  const data = readFragment(TopicPersonFieldsFragment, props.data);
  return <TopicPersonClient data={data} />;
}
