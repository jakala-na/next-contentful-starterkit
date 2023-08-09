import { FragmentType, getFragmentData, graphql } from "#/gql";

import { getPageLinkProps } from "../page";
import { HeroBanner } from "../ui/hero-banner";

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

const HeroBannerCtf: React.FC<HeroBannerProps> = (props) => {
  const data = getFragmentData(ComponentHeroBannerFieldsFragment, props.data);
  return (
    <div>
      <HeroBanner {...data} />
    </div>
  );
};

export default HeroBannerCtf;
