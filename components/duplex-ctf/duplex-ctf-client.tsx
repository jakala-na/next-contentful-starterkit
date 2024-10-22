'use client';

import { ResultOf } from 'gql.tada';
import { useAnalytics } from 'use-analytics';

import { createAnalyticsEvent } from '#/components/analytics/tracking-events';
import { TrackInView } from '#/components/analytics/trackInView';
import { RichTextCtf } from '#/components/rich-text-ctf';

import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { getPageLinkChildProps } from '../page';
import { Duplex } from '../ui/duplex';
import { ComponentDuplexFieldsFragment } from './duplex-ctf';

// We can create analytics event typed data on top level
// using createAnalyticsEvent helper.
// It will us type-safely create event name and event data.
const analyticsInViewEvent = createAnalyticsEvent('duplexViewed', {
  category: 'duplexViewed',
  type: 'ctf',
});

// For the direct track() usage from hook we can destructure the object
// returned from createAnalyticsEvent helper to have separate values as props.
const { eventName: analyticsClickEventName, eventData: analyticsClickEventData } = createAnalyticsEvent(
  'duplexClicked',
  {
    category: 'duplexClicked',
    type: 'ctf',
  }
);

export const DuplexCtfClient: React.FC<{
  data: ResultOf<typeof ComponentDuplexFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);
  const { track } = useAnalytics();
  return (
    <TrackInView {...analyticsInViewEvent}>
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
        onClickAnalyticsEvent={() => track(analyticsClickEventName, analyticsClickEventData)}
      />
    </TrackInView>
  );
};
