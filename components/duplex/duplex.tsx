import { FragmentType, getFragmentData, graphql } from "#/gql";

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
      url
    }
    imageStyle
    colorPalette
  }
`);

export type DuplexProps = {
  data: FragmentType<typeof ComponentDuplexFieldsFragment>;
};

const HeroBanner: React.FC<DuplexProps> = (props) => {
  const data = getFragmentData(ComponentDuplexFieldsFragment, props.data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default HeroBanner;
