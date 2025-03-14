'use client';

import { forwardRef } from 'react';
import type { ReactNode, HTMLAttributes, MouseEventHandler, MouseEvent } from 'react';

import {
  Card as ShadCNCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { cn } from '@repo/ui/lib/utils';

import { getColorConfigFromPalette } from '../../theme';
import { Button } from '../button';
import { Image, type ImageProps } from '../image';
import { type LinkProps, Link } from '../link';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image?: ImageProps;
  headline?: string;
  body?: ReactNode;
  cta?: LinkProps;
  colorPalette?: string;
  addAttributes?: (name: string) => object;
  onClickEvent?: MouseEventHandler<HTMLDivElement>;
  onClickAnalyticsEvent?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
  const {
    image,
    headline,
    body,
    cta,
    colorPalette,
    addAttributes = () => ({}),
    onClickEvent,
    onClickAnalyticsEvent,
    ...restProps
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette ?? '');

  const onClickHandler = (e: MouseEvent<HTMLInputElement>) => {
    if (onClickEvent) {
      onClickEvent(e);
    }
  };

  return (
    <ShadCNCard
      ref={ref}
      className={cn(
        'not-wysiwyg max-w-sm overflow-hidden transition-all hover:shadow-md',
        onClickEvent && 'cursor-pointer hover:-translate-y-1'
      )}
      onClick={onClickHandler}
      {...restProps}
    >
      {image ? (
        <div className="w-full overflow-hidden">
          <Image
            {...addAttributes('image')}
            className="w-full object-cover"
            style={{
              aspectRatio: '16/9',
            }}
            {...image}
          />
        </div>
      ) : null}

      {headline ? (
        <CardHeader>
          <CardTitle className="text-2xl">{headline}</CardTitle>
        </CardHeader>
      ) : null}

      {body ? (
        <CardContent>
          <CardDescription className="wysiwyg text-base">{body}</CardDescription>
        </CardContent>
      ) : null}

      {cta?.href && cta.children ? (
        <CardFooter>
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
        </CardFooter>
      ) : null}
    </ShadCNCard>
  );
});

Card.displayName = 'CustomCard';
