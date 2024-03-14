'use client';

import { ResultOf } from 'gql.tada';

import { HeroBanner } from "../ui/hero-banner";
import { ComponentHeroBannerFieldsFragment } from "#/gql/graphql";
import { RichTextCtf } from "#/components/rich-text-ctf";
import { getPageLinkChildProps } from "../page";
import { useComponentPreview } from "../hooks/use-component-preview";
import { getImageChildProps } from "../image-ctf";
import { TrackInView } from "../analytic/trackInView";

export const HeroBannerCtfClient: React.FC<{
  data: ResultOf<typeof ComponentHeroBannerFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } =
    useComponentPreview<ComponentHeroBannerFieldsFragment>(originalData);
  return (
    <TrackInView eventName="heroBannerViewed" eventData={{ category: 'heroBannerViewed'}}>
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
    </TrackInView>
  );
};
