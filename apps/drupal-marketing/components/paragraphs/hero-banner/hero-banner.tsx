import { type FragmentOf, graphql, readFragment } from 'gql.tada';
import { HeroBanner } from '@repo/ui/components/hero-banner';
import { getMediaImageProps, MediaImageFragment } from '#/components/media/image';

export const ComponentHeroBannerFieldsFragment = graphql(
  `
    fragment ComponentHeroBannerFields on ParagraphHero {
      __typename
      heading
      description {
        processed
      }
      image {
        ...MediaImage
      }
    }
  `,
  [MediaImageFragment]
);

export interface HeroBannerProps {
  data: FragmentOf<typeof ComponentHeroBannerFieldsFragment>;
}

export function ParagraphHeroBanner(props: HeroBannerProps) {
  const data = readFragment(ComponentHeroBannerFieldsFragment, props.data);

  return (
    <HeroBanner
      headline={data.heading}
      bodyText={<div dangerouslySetInnerHTML={{ __html: data.description?.processed as TrustedHTML }}></div>}
      image={data.image ? getMediaImageProps(data.image) : null}
      size
      colorPalette="7. Black (#000000)"
    />
  );
}
