import { FragmentOf, readFragment, graphql } from 'gql.tada';
import { DuplexCtfClient } from './duplex-ctf-client';
import { AssetFieldsFragment } from '../asset-ctf';
import { PageLinkFieldsFragment } from '../page';

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
  [AssetFieldsFragment, PageLinkFieldsFragment],
);

export type DuplexProps = {
  data: FragmentOf<typeof ComponentDuplexFieldsFragment>;
};

export const DuplexCtf: React.FC<DuplexProps> = (props) => {
  const data = readFragment(ComponentDuplexFieldsFragment, props.data);
  return <DuplexCtfClient data={data} />;
};
