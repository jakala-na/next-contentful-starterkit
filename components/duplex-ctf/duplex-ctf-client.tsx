'use client';

import { ResultOf } from 'gql.tada';

import { RichTextCtf } from '#/components/rich-text-ctf';

import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { TrackInView } from '../analytic/trackInView';
import { createAnalyticEvent } from '../analytic/tracking-events';
import { getPageLinkChildProps } from '../page';
import { Duplex } from '../ui/duplex';
import { ComponentDuplexFieldsFragment } from './duplex-ctf';

// We can create analytic event typed data on top level
// using createAnalyticEvent helper.
const analyticInViewEvent = createAnalyticEvent('duplexViewed', {
  category: 'duplexViewed',
  type: 'ctf',
});

export const DuplexCtfClient: React.FC<{
  data: ResultOf<typeof ComponentDuplexFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);

    return (
    <TrackInView {...analyticInViewEvent}>
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
    </TrackInView>
  );
};
