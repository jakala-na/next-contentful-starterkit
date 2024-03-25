import { FragmentOf, readFragment, graphql } from "gql.tada";
import { HeroBannerClient } from "./hero-banner-client";
import { AssetFieldsFragment } from "#/components/contentstack/asset";
import { PageLinkFieldsFragment } from "#/components/contentstack/page";

export const ComponentHeroBannerFieldsFragment = graphql(
  `
    fragment ComponentHeroBannerFields on ComponentHeroBanner {
      __typename
      sys {
        id
      }
      headline
      bodyText {
        json
        links {
          assets {
            block {
              ...AssetFields
            }
          }
        }
      }
      ctaText
      targetPage {
        ...PageLinkFields
      }
      image {
        ...AssetFields
      }
      imageStyle
      heroSize
      colorPalette
    }
  `,
  [AssetFieldsFragment, PageLinkFieldsFragment]
);

export type HeroBannerProps = {
  data: FragmentOf<typeof ComponentHeroBannerFieldsFragment>;
};

export const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  const data = readFragment(ComponentHeroBannerFieldsFragment, props.data);

  return <HeroBannerClient data={data} />;
};
