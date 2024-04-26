import { ReactNode } from 'react';
import { Button } from '../button/button';
import { Link, LinkProps } from '../link';
import { Image, ImageProps } from '../image';

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
    <div className="relative min-h-[calc(100vh-9rem)] flex items-center">
      {image && (
        <Image
          {...addAttributes('image')}
          {...image}
          className="-z-10 w-full h-[calc(100vh-9rem)] absolute object-cover object-center"
          alt={image.alt}
        />
      )}
      <div className="mx-auto pt-10 w-full max-w-6xl px-5">
        {headline && (
          <h1
            {...addAttributes('headline')}
            className={
              'mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'
            }
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
