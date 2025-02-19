'use client';

import { type ResultOf } from 'gql.tada';

import { createAnalyticsEvent } from '#/components/analytics/tracking-events';
import { TrackInView } from '#/components/analytics/track-in-view';
import { type ComponentHeroBannerFieldsFragment } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';

import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { getPageLinkChildProps } from '../page';
import { HeroBanner } from '@repo/ui/components/hero-banner';

export function HeroBannerCtfClient(props: { data: ResultOf<typeof ComponentHeroBannerFieldsFragment> }) {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview(originalData);
  // We use createAnalyticsEvent helper to create typed event.
  const analyticsInViewEvent = createAnalyticsEvent('heroBannerViewed', {
    category: 'duplexViewed',
  });
  return (
    <TrackInView {...analyticsInViewEvent}>
      <HeroBanner
        headline={data.headline}
        bodyText={data.bodyText ? <RichTextCtf {...data.bodyText} /> : null}
        cta={data.targetPage ? getPageLinkChildProps(data.targetPage, data.ctaText) : null}
        image={
          data.image
            ? getImageChildProps({
                data: data.image,
                sizes: '100vw',
                priority: true,
              })
            : null
        }
        size={data.heroSize}
        colorPalette={data.colorPalette}
        addAttributes={addAttributes}
      />
    </TrackInView>
  );
}
