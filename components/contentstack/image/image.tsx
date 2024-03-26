import { readFragment } from 'gql.tada'
import { default as NextImage, ImageProps as NextImageProps } from 'next/image'
import React from 'react'
import {
  AssetProps,
  AssetFieldsFragment,
} from '#/components/contentstack/asset'

// Omit src and alt from ImageProps because we're validating them at runtime.
// Apparently typescript doesn't like that ImageProps has src and alt as required but we're spreading props after we map them from Contentful fields,
// it basically thinks we'll always override those props via the spread.
export type ImageProps = AssetProps & Omit<NextImageProps, 'src' | 'alt'>

export const getImageProps = ({ data: fragmentData, ...props }: ImageProps) => {
  const data = readFragment(AssetFieldsFragment, fragmentData)
  if (!data.url) {
    return null
  }
  return {
    src: data?.url,
    alt: data?.description || '',
    // width: data?.width || undefined,@TODO
    // height: data?.height || undefined,@TODO
    ...props,
  }
}

export const getImageChildProps = (props: ImageProps) => {
  const imageProps = getImageProps(props)

  if (!imageProps) {
    return null
  }

  return {
    ...imageProps,
    children: <NextImage {...imageProps} />,
    asChild: true,
  }
}

export const Image = (props: ImageProps) => {
  const imageProps = getImageProps(props)

  if (!imageProps) {
    return null
  }

  return <NextImage {...imageProps} />
}
