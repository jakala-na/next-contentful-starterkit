'use client';

import { Duplex } from '../ui/duplex';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { getPageLinkChildProps } from '../page';
import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { ComponentDuplexFieldsFragment } from './duplex-ctf';
import { ResultOf } from 'gql.tada';

export const DuplexCtfClient: React.FC<{
  data: ResultOf<typeof ComponentDuplexFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);

  return (
    <Duplex
      headline={data.headline}
      bodyText={
        data.bodyText && (
          <div {...addAttributes('bodyText')}>
            <RichTextCtf {...data.bodyText} />
          </div>
        )
      }
      image={
        data.image &&
        getImageChildProps({
          data: data.image,
          priority: true,
          sizes: '100vw',
        })
      }
      imageAlignment={data.containerLayout ? 'left' : 'right'}
      imageHeight={data.imageStyle ? 'fixed' : 'full'}
      addAttributes={addAttributes}
      cta={
        data.targetPage &&
        getPageLinkChildProps({
          data: data.targetPage,
          children: data.ctaText,
        })
      }
      colorPalette={data.colorPalette}
    />
  );
};
