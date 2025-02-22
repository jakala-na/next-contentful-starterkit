import { type ReactNode } from 'react';

import { getColorConfigFromPalette } from '../../theme';
import { Button } from '../button';
import { Image, type ImageProps } from '../image';
import type { LinkProps } from '../link';
import { Link } from '../link';

export interface CardProps {
  headline?: string;
  bodyText?: ReactNode;
  image?: ImageProps;
  cta?: LinkProps;
  link?: string;
  colorPalette?: string;
  addAttributes?: (name: string) => object;
  onClickEvent?: React.MouseEventHandler<HTMLDivElement>;
  onClickAnalyticsEvent?: () => void;
}

export function Card(props: CardProps) {
  const {
    headline,
    bodyText,
    image,
    cta,
    link,
    colorPalette,
    addAttributes = () => ({}), // Default to no-op.
    onClickEvent,
    onClickAnalyticsEvent,
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette ?? '');

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    if (onClickEvent) {
      return onClickEvent(e);
    }
    if (link && window) {
      window.location.href = link;
      return;
    }
  };

  return (
    <div
      className={`max-w-sm rounded-lg shadow-lg overflow-hidden ${onClickEvent || link ? 'cursor-pointer' : ''}`}
      style={{ backgroundColor: colorConfig.backgroundColor }}
      onClick={onClickHandler}
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
          <div className="wysiwyg my-5" style={{ color: colorConfig.textColor }}>
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
