import { type FragmentOf, graphql, readFragment } from 'gql.tada';
import { HeroBanner } from '@repo/ui/components/hero-banner';
import { getMediaImageProps, MediaImageFragment } from '#/components/media/image';

export const ComponentHeroBannerFieldsFragment = graphql(
  `
    fragment ComponentHeroBannerFields on ParagraphHero {
      __typename
      heading
      description
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
      bodyText={data.description}
      image={getMediaImageProps(data.image)}
      size
      colorPalette="7. Black (#000000)"
    />
  );
}
