import { type FragmentOf, graphql, readFragment } from 'gql.tada';

// eslint-disable-next-line import/no-cycle -- assets and images are so intertwined, this will need to be refactored
import { ImageCtf } from '#/components/image-ctf';

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

export interface AssetCtfProps {
  data: FragmentOf<typeof AssetFieldsFragment>;
}

export function AssetCtf(props: AssetCtfProps) {
  const data = readFragment(AssetFieldsFragment, props.data);

  const { url, contentType } = data;

  if (!url) {
    return null;
  }

  if (!contentType || !url) {
    return null;
  }

  if (contentType.startsWith('image')) {
    return <ImageCtf {...props} />;
  }

  // TODO: Handle other file types.

  return null;
}
