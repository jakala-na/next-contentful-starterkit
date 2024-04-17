import { FragmentOf, readFragment, graphql } from "gql.tada";
import { HeroBannerCtfClient } from "./hero-banner-ctf-client";
import { AssetFieldsFragment } from "../asset-ctf";
import { PageLinkFieldsFragment } from "../page";

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

export const HeroBannerCtf: React.FC<HeroBannerProps> = (props) => {
  const data = readFragment(ComponentHeroBannerFieldsFragment, props.data);

  return <HeroBannerCtfClient data={data} />;
};
