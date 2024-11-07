import { HeroBanner } from '../ui/hero-banner';
import { ReactNode } from 'react';

type HeroBannerExpProps = {
  headline: string;
  bodyText: string;
  image: string;
  size?: boolean;
  slotCtas?: ReactNode;
};

export const HeroBannerCtfExpClient = ({ headline, bodyText, image, size, slotCtas }: HeroBannerExpProps) => {
  return (
    <HeroBanner
      headline={headline}
      bodyText={bodyText}
      image={{
        src: image,
        alt: 'Hero banner experience image',
      }}
      size={size}
      slotCtas={slotCtas}
    />
  );
};
