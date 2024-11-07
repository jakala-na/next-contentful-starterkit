'use client';

import { ResultOf } from 'gql.tada';

import { createAnalyticsEvent } from '#/components/analytics/tracking-events';
import { TrackInView } from '#/components/analytics/trackInView';
import { ComponentHeroBannerFieldsFragment } from '#/components/hero-banner-ctf/hero-banner-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';

import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';
import { getPageLinkChildProps } from '../page';
import { HeroBanner } from '../ui/hero-banner';
import { Button } from '#/components/ui/button';
import { Link } from '#/components/ui/link';
import React from 'react';

export const HeroBannerCtfClient: React.FC<{
  data: ResultOf<typeof ComponentHeroBannerFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);
  // We use createAnalyticsEvent helper to create typed event.
  const analyticsInViewEvent = createAnalyticsEvent('heroBannerViewed', {
    category: 'duplexViewed',
  });

  const cta =
    data.targetPage &&
    getPageLinkChildProps({
      data: data.targetPage,
      children: data.ctaText,
    });

  return (
    <TrackInView {...analyticsInViewEvent}>
      <HeroBanner
        headline={data.headline}
        bodyText={data.bodyText && <RichTextCtf {...data.bodyText} />}
        slotCtas={
          cta?.href &&
          cta?.children && (
            <Button {...addAttributes('ctaText')} asChild>
              <Link {...cta} />
            </Button>
          )
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
    </TrackInView>
  );
};
