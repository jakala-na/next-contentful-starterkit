import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { TopicPersonFieldsFragment } from '#/components/topic-person/topic-person';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicBusinessInfoClient } from './topic-business-info-client';

export const TopicBusinessInfoFieldsFragment = graphql(
  `
    fragment TopicBusinessInfo on TopicBusinessInfo {
      __typename
      sys {
        id
      }
      name
      shortDescription
      body {
        json
        links {
          entries {
            block {
              ...TopicPerson
            }
          }
        }
      }
      featuredImage {
        ...AssetFields
      }
    }
  `,
  [AssetFieldsFragment, TopicPersonFieldsFragment]
);

export interface TopicBusinessInfoProps {
  data: FragmentOf<typeof TopicBusinessInfoFieldsFragment>;
}

export function TopicBusinessInfo(props: TopicBusinessInfoProps) {
  const data = readFragment(TopicBusinessInfoFieldsFragment, props.data);
  return <TopicBusinessInfoClient data={data} />;
}
