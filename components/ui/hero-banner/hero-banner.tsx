import { ReactNode } from 'react';

import { cn } from '#/lib/utils';
import { getColorConfigFromPalette } from '#/theme';

import { Button } from '../button/button';
import { Image, ImageProps } from '../image';
import { Link, LinkProps } from '../link';

interface HeroBannerProps {
  headline?: string | null;
  bodyText?: ReactNode;
  image?: ImageProps | null;
  cta?: LinkProps | null;
  size?: boolean | null;
  colorPalette?: string | null;
  addAttributes?: (name: string) => object | null;
}

export function HeroBanner(props: HeroBannerProps) {
  const {
    image,
    headline,
    bodyText,
    cta,
    size,
    colorPalette,
    addAttributes = () => ({}), // Default to no-op.
  } = props;

  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  return (
    <div
      className={cn('relative flex min-h-[calc(100vh-9rem)] items-center', {
        'mx-auto max-w-6xl overflow-hidden rounded-xl': !size,
      })}
    >
      {image && (
        <Image
          {...addAttributes('image')}
          {...image}
          className="absolute -z-10 h-[calc(100vh-9rem)] w-full object-cover object-center"
          alt={image.alt}
        />
      )}
      <div
        style={{ backgroundColor: colorConfig.backgroundColor }}
        className="absolute left-0 top-0 h-full w-full opacity-25"
      ></div>
      <div
        className={cn('z-10 pt-10', {
          'mx-auto w-full px-5 md:max-w-[65%]': size,
          'max-w-3xl px-10': !size,
        })}
      >
        {headline && (
          <h1
            style={{ color: colorConfig.headlineColor }}
            {...addAttributes('headline')}
            className={'text-gray-900 mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl'}
          >
            {headline}
          </h1>
        )}
        {bodyText && (
          <div
            style={{ color: colorConfig.headlineColor }}
            {...addAttributes('bodyText')}
            className="text-lg font-medium leading-6"
          >
            {bodyText}
          </div>
        )}
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
