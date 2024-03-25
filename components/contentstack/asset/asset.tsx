import { Image } from "#/components/contentstack/image";
import { FragmentOf, readFragment, graphql } from "gql.tada";

export const AssetFieldsFragment = graphql(`
  fragment AssetFields on SysAsset {
    __typename
    unique_identifier
    content_type
    title
    url
    description
  }
`);

export type AssetProps = {
  data: FragmentOf<typeof AssetFieldsFragment>;
};

export const Asset = (props: AssetProps) => {
  const data = readFragment(AssetFieldsFragment, props.data);

  const { url, content_type, title } = data;

  if (!url) {
    return null;
  }

  if (!content_type || !url) {
    return null;
  }

  if (content_type.startsWith("image")) {

    return <Image {...props} />;//@TODO Pass proper alt
  }

  // TODO: Handle other file types.

  return null;
};
