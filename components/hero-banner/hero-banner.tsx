import { FragmentType, getFragmentData, graphql } from "#/gql";

export const ComponentHeroBannerFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentHeroBannerFields on ComponentHeroBanner {
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
    heroSize
    colorPalette
  }
`);

export type HeroBannerProps = {
  data: FragmentType<typeof ComponentHeroBannerFieldsFragment>;
};

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  const data = getFragmentData(ComponentHeroBannerFieldsFragment, props.data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default HeroBanner;
