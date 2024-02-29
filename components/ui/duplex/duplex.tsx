import { cn } from '#/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { Button } from '../button';
import { Image, ImageProps } from '../image';
import { Link, LinkProps } from '../link';

const duplexVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-white',
    },
    imageAlignment: {
      left: 'flex-row',
      right: 'flex-row-reverse',
    },
  },
  defaultVariants: {
    variant: 'default',
    imageAlignment: 'left',
  },
});

interface DuplexProps extends VariantProps<typeof duplexVariants> {
  headline?: string | null;
  bodyText?: ReactNode;
  image?: ImageProps | null;
  cta?: LinkProps | null;
  addAttributes?: (name: string) => object | null;
}

export function Duplex(props: DuplexProps) {
  const {
    image,
    headline,
    bodyText,
    cta,
    variant,
    imageAlignment,
    addAttributes = () => ({}), // Default to no-op.
  } = props;

  return (
    <div className='flex justify-center py-12 bg-gray-100'>
      <div className={cn(duplexVariants({ imageAlignment }), 'flex w-11/12 max-w-6xl rounded-lg overflow-hidden shadow-lg')}>
        {image && (
          <div className='w-1/2'>
            <Image
              {...addAttributes('image')}
              {...image}
              className='w-full h-full object-cover object-center'
              alt={image.alt}
            />
          </div>
        )}
        <div className={cn(duplexVariants({ variant }), 'w-1/2 p-12')}>
          {headline && <h2 className='text-4xl font-bold mb-4'>{headline}</h2>}
          {bodyText && <div className='text-lg'>{bodyText}</div>}
          {cta?.href && cta?.children && (
          <div className="mt-6">
              <Button {...addAttributes("ctaText")} asChild>
                <Link {...cta} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
