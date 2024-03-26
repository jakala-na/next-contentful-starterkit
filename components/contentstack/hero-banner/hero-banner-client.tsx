'use client'

import { HeroBanner } from '#/components/ui/hero-banner'
import { RichText } from '#/components/contentstack/rich-text'
import { getPageLinkChildProps } from '#/components/contentstack/page'
import { useComponentPreview } from '#/components/hooks/use-component-preview'
import { getImageChildProps } from '#/components/contentstack/image'
import { ComponentHeroBannerFieldsFragment } from './hero-banner'
import { ResultOf } from 'gql.tada'

export const HeroBannerClient: React.FC<{
  data: ResultOf<typeof ComponentHeroBannerFieldsFragment>
}> = (props) => {
  const { data: originalData } = props
  //const { data, addAttributes } =
  //useComponentPreview<typeof originalData>(originalData);

  return (
    <></>
    // <HeroBanner
    //   headline={data.headline}
    //   bodyText={data.bodyText && <RichText {...data.bodyText} />}
    //   cta={
    //     data.targetPage &&
    //     getPageLinkChildProps({
    //       data: data.targetPage,
    //       children: data.ctaText,
    //     })
    //   }
    //   image={
    //     data.image &&
    //     getImageChildProps({
    //       data: data.image,
    //       sizes: "100vw",
    //       priority: true,
    //     })
    //   }
    //   addAttributes={addAttributes}
    // />
  )
}
