import { FragmentOf, readFragment, graphql } from "gql.tada";
import { DuplexClient } from "./duplex-client";
import { AssetFieldsFragment } from "#/components/contentstack/asset";
import { PageLinkFieldsFragment } from "#/components/contentstack/page";

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

export type DuplexProps = {
  data: FragmentOf<typeof ComponentDuplexFieldsFragment>;
};

export const Duplex: React.FC<DuplexProps> = (props) => {
  const data = readFragment(ComponentDuplexFieldsFragment, props.data);
  return <DuplexClient data={data} />;
};
