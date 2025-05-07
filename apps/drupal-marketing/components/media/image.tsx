import { type FragmentOf, graphql, readFragment } from 'gql.tada';

export const MediaImageFragment = graphql(`
  fragment MediaImage on MediaImage {
    __typename
    id
    mediaImage {
      src: url
      width
      height
      alt
    }
  }
`);

export const getMediaImageProps = (image: FragmentOf<typeof MediaImageFragment>) => {
  const data = readFragment(MediaImageFragment, image);

  return {
    src: data.mediaImage.src,
    alt: data.mediaImage.alt ?? '',
    width: data.mediaImage.width,
    height: data.mediaImage.height,
  };
};
