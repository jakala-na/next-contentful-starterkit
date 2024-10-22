import { FragmentOf, graphql, readFragment } from 'gql.tada';

import { ComponentTopicPersonFieldsFragment } from '#/components/topic-person/topic-person';

import { AssetFieldsFragment } from '../asset-ctf';
import { TopicBusinessInfoClient } from './topic-business-info-client';

export const ComponentTopicBusinessInfoFieldsFragment = graphql(
  `
    fragment ComponentTopicBusinessInfo on TopicBusinessInfo {
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
              ...ComponentTopicPerson
            }
          }
        }
      }
      featuredImage {
        ...AssetFields
      }
    }
  `,
  [AssetFieldsFragment, ComponentTopicPersonFieldsFragment]
);

export type TopicBusinessInfoProps = {
  data: FragmentOf<typeof ComponentTopicBusinessInfoFieldsFragment>;
};

export const TopicBusinessInfo: React.FC<TopicBusinessInfoProps> = (props) => {
  const data = readFragment(ComponentTopicBusinessInfoFieldsFragment, props.data);
  return <TopicBusinessInfoClient data={data} />;
};
