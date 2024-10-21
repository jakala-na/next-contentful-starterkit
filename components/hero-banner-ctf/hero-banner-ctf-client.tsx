'use client';

import { ResultOf } from 'gql.tada';

import { RichTextCtf } from '#/components/rich-text-ctf';

import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { getPageLinkChildProps } from '../page';
import { HeroBanner } from '../ui/hero-banner';
import { ComponentHeroBannerFieldsFragment } from './hero-banner-ctf';

export const HeroBannerCtfClient: React.FC<{
  data: ResultOf<typeof ComponentHeroBannerFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);

  return (
    <HeroBanner
      headline={data.headline}
      bodyText={data.bodyText && <RichTextCtf {...data.bodyText} />}
      cta={
        data.targetPage &&
        getPageLinkChildProps({
          data: data.targetPage,
          children: data.ctaText,
        })
      }
      image={
        data.image &&
        getImageChildProps({
          data: data.image,
          sizes: '100vw',
          priority: true,
        })
      }
      size={data.heroSize}
      colorPalette={data.colorPalette}
      addAttributes={addAttributes}
    />
  );
};
