import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { AssetFieldsFragment } from '../asset-ctf';
import { PageLinkFieldsFragment } from '../page';
import { DuplexCtfClient } from './duplex-ctf-client';

export const ComponentDuplexFieldsFragment = graphql(
  `
    fragment ComponentDuplexFields on ComponentDuplex {
      __typename
      sys {
        id
      }
      headline
      bodyText {
        json
      }
      ctaText
      targetPage {
        ...PageLinkFields
      }
      image {
        ...AssetFields
      }
      imageStyle
      colorPalette
      containerLayout
    }
  `,
  [AssetFieldsFragment, PageLinkFieldsFragment]
);

export interface DuplexProps {
  data: FragmentOf<typeof ComponentDuplexFieldsFragment>;
}

export function DuplexCtf(props: DuplexProps) {
  const data = readFragment(ComponentDuplexFieldsFragment, props.data);
  return <DuplexCtfClient data={data} />;
}
