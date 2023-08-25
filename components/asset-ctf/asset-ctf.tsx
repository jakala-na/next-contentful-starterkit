import { ImageCtf } from "#/components/image-ctf";
import { FragmentType, getFragmentData, graphql } from "#/gql";

export const AssetFieldsFragment = graphql(/* GraphQL */ `
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
  data: FragmentType<typeof AssetFieldsFragment>;
};

export const AssetCtf = (props: AssetCtfProps) => {
  const data = getFragmentData(AssetFieldsFragment, props.data);

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
