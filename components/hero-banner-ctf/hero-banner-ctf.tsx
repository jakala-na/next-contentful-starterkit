import { FragmentType, getFragmentData, graphql } from "#/gql";
import { HeroBannerCtfClient } from "./hero-banner-ctf-client";

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
      width
      height
    }
    imageStyle
    heroSize
    colorPalette
  }
`);

export type HeroBannerProps = {
  data: FragmentType<typeof ComponentHeroBannerFieldsFragment>;
};

export const HeroBannerCtf: React.FC<HeroBannerProps> = (props) => {
  const data = getFragmentData(ComponentHeroBannerFieldsFragment, props.data);

  return <HeroBannerCtfClient data={data} />;
};
