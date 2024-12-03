import React from 'react';
import { type ImageProps, default as NextImage } from 'next/image';

import { readFragment } from 'gql.tada';

// eslint-disable-next-line import/no-cycle -- assets and images are so intertwined, this will need to be refactored
import { type AssetCtfProps, AssetFieldsFragment } from '../asset-ctf';

// Omit src and alt from ImageProps because we're validating them at runtime.
// Apparently typescript doesn't like that ImageProps has src and alt as required but we're spreading props after we map them from Contentful fields,
// it basically thinks we'll always override those props via the spread.
export type ImageCtfProps = AssetCtfProps & Omit<ImageProps, 'src' | 'alt'>;

export const getImageProps = ({ data: fragmentData, ...props }: ImageCtfProps) => {
  const data = readFragment(AssetFieldsFragment, fragmentData);
  if (!data.url) {
    return null;
  }
  return {
    src: data.url,
    alt: data.description ?? '',
    width: data.width ?? undefined,
    height: data.height ?? undefined,
    ...props,
  };
};

export const getImageChildProps = (props: ImageCtfProps) => {
  const imageProps = getImageProps(props);

  if (!imageProps) {
    return null;
  }

  return {
    ...imageProps,
    children: <NextImage {...imageProps} />,
    asChild: true,
  };
};

export function ImageCtf(props: ImageCtfProps) {
  const imageProps = getImageProps(props);

  if (!imageProps) {
    return null;
  }

  return <NextImage {...imageProps} />;
}
