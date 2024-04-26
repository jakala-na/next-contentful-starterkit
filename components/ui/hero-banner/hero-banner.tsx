import { ReactNode } from 'react';

import { Button } from '../button/button';
import { Image, ImageProps } from '../image';
import { Link, LinkProps } from '../link';

interface HeroBannerProps {
  headline?: string | null;
  bodyText?: ReactNode;
  image?: ImageProps | null;
  cta?: LinkProps | null;
  addAttributes?: (name: string) => object | null;
}

export function HeroBanner(props: HeroBannerProps) {
  const {
    image,
    headline,
    bodyText,
    cta,
    addAttributes = () => ({}), // Default to no-op.
  } = props;

  return (
    <div className="relative flex min-h-[calc(100vh-9rem)] items-center">
      {image && (
        <Image
          {...addAttributes('image')}
          {...image}
          className="absolute -z-10 h-[calc(100vh-9rem)] w-full object-cover object-center"
          alt={image.alt}
        />
      )}
      <div className="mx-auto w-full max-w-6xl px-5 pt-10">
        {headline && (
          <h1
            {...addAttributes('headline')}
            className={'text-gray-900 mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl'}
          >
            {headline}
          </h1>
        )}
        {bodyText && <div {...addAttributes('bodyText')}>{bodyText}</div>}
        {cta?.href && cta?.children && (
          <div className="mt-6">
            <Button {...addAttributes('ctaText')} asChild>
              <Link {...cta} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
