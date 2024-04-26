'use client';

import { HeroBanner } from '../ui/hero-banner';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { getPageLinkChildProps } from '../page';
import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { ComponentHeroBannerFieldsFragment } from './hero-banner-ctf';
import { ResultOf } from 'gql.tada';

export const HeroBannerCtfClient: React.FC<{
  data: ResultOf<typeof ComponentHeroBannerFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } =
    useComponentPreview<typeof originalData>(originalData);

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
      addAttributes={addAttributes}
    />
  );
};
