import { ImageCtf } from "#/components/image-ctf";
import { FragmentOf, readFragment, graphql } from "gql.tada";

export const AssetFieldsFragment = graphql(`
  fragment AssetFields on Asset {
    __typename
    sys {
      id
    }
    contentType
    title
    url
    width
    height
    description
  }
`);

export type AssetCtfProps = {
  data: FragmentOf<typeof AssetFieldsFragment>;
};

export const AssetCtf = (props: AssetCtfProps) => {
  const data = readFragment(AssetFieldsFragment, props.data);

  const { url, contentType } = data;

  if (!url) {
    return null;
  }

  if (!contentType || !url) {
    return null;
  }

  if (contentType.startsWith("image")) {
    return <ImageCtf {...props} />;
  }

  // TODO: Handle other file types.

  return null;
};
