import { type ReactNode } from 'react';

import { getColorConfigFromPalette } from '../../theme';
import { Button } from '../button';
import { Image, type ImageProps } from '../image';
import type { LinkProps } from '../link';
import { Link } from '../link';

interface CardProps {
  headline?: string | null;
  bodyText?: ReactNode;
  image?: ImageProps | null;
  cta?: LinkProps | null;
  colorPalette?: string | null;
  addAttributes?: (name: string) => object | null;
  onClickAnalyticsEvent?: () => void;
}

export function Card(props: CardProps) {
  const {
    headline,
    bodyText,
    image,
    cta,
    colorPalette,
    addAttributes = () => ({}), // Default to no-op.
    onClickAnalyticsEvent,
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette ?? '');

  return (
    <div
      className="max-w-sm rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundColor: colorConfig.backgroundColor }}
    >
      <div className="aspect-w-16 aspect-h-9">
        {image ? <Image {...addAttributes('image')} {...image} alt={image.alt} className="w-full" /> : null}{' '}
      </div>
      <div className="p-6">
        {headline ? (
          <h3 className="text-2xl font-bold" style={{ color: colorConfig.headlineColor }}>
            {headline}
          </h3>
        ) : null}
        {bodyText ? (
          <div className="wysiwyg" style={{ color: colorConfig.textColor }}>
            {bodyText}
          </div>
        ) : null}
        {cta?.href && cta.children ? (
          <div className="mt-6">
            <Button
              variant={colorConfig.buttonColor}
              {...addAttributes('ctaText')}
              asChild
              onClick={() => {
                onClickAnalyticsEvent?.();
              }}
            >
              <Link {...cta} />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
