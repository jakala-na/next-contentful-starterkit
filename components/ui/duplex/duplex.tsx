import { cn } from '#/lib/utils';
import { getColorConfigFromPalette } from '#/theme';
import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { Button } from '../button';
import { Image, ImageProps } from '../image';
import { Link, LinkProps } from '../link';

const layoutVariants = cva('flex w-11/12 max-w-6xl', {
  variants: {
    imageAlignment: {
      left: 'flex-row',
      right: 'flex-row-reverse',
    },
  },
  defaultVariants: {
    imageAlignment: 'left',
  },
});

const imageStyleVariants = cva('w-full', {
  variants: {
    imageHeight: {
      full: 'h-full object-cover object-center',
      fixed: '',
    },
  },
  defaultVariants: {
    imageHeight: 'full',
  },
});

const imageContainerVariants = cva(
  ['w-1/2', 'rounded-lg', 'overflow-hidden', 'shadow-lg'],
  {
    variants: {
      imageHeight: {
        full: '',
        fixed: 'flex self-center',
      },
    },
    defaultVariants: {
      imageHeight: 'full',
    },
  }
);

interface DuplexProps
  extends VariantProps<typeof layoutVariants>,
    VariantProps<typeof imageStyleVariants> {
  headline?: string | null;
  bodyText?: ReactNode;
  image?: ImageProps | null;
  cta?: LinkProps | null;
  colorPalette?: string | null;
  addAttributes?: (name: string) => object | null;
}

export function Duplex(props: DuplexProps) {
  const {
    image,
    headline,
    bodyText,
    cta,
    imageAlignment,
    imageHeight,
    colorPalette,
    addAttributes = () => ({}), // Default to no-op.
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  return (
    <div
      className='flex justify-center py-12'
      style={{ backgroundColor: colorConfig.backgroundColor }}
    >
      <div className={cn(layoutVariants({ imageAlignment }))}>
        {image && (
          <div
            className={cn(imageContainerVariants({ imageHeight }))}
          >
            <Image
              {...addAttributes('image')}
              {...image}
              className={cn(imageStyleVariants({ imageHeight }))}
              alt={image.alt}
            />
          </div>
        )}
        <div className='w-1/2 p-12'>
          {headline && (
            <h2
              className='text-4xl font-bold mb-4'
              style={{ color: colorConfig.headlineColor }}
            >
              {headline}
            </h2>
          )}
          {bodyText && (
            <div className='text-lg' style={{ color: colorConfig.textColor }}>
              {bodyText}
            </div>
          )}
          {cta?.href && cta?.children && (
            <div className='mt-6'>
              <Button
                variant={colorConfig.buttonColor}
                {...addAttributes('ctaText')}
                asChild
              >
                <Link {...cta} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
