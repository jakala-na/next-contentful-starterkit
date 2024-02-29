import { FragmentType, getFragmentData, graphql } from '#/gql';
import { DuplexCtfClient } from './duplex-ctf-client';

export const ComponentDuplexFieldsFragment = graphql(/* GraphQL */ `
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
`);

export type DuplexProps = {
  data: FragmentType<typeof ComponentDuplexFieldsFragment>;
};

export const DuplexCtf: React.FC<DuplexProps> = (props) => {
  const data = getFragmentData(ComponentDuplexFieldsFragment, props.data);
  return <DuplexCtfClient data={data} />;
};
