import { type ReactNode } from 'react';

import { Image, type ImageProps } from '@repo/ui/components/image';

export interface TopicProductProps {
  name: string | null;
  description?: ReactNode;
  featuredImage?: ImageProps | null;
  price: number | null;
  addAttributes?: (name: string) => object | null;
}

export function TopicProduct({
  name,
  description,
  featuredImage,
  price,
  addAttributes = () => ({}),
}: TopicProductProps) {
  return (
    <div className="flex justify-center py-12">
      <div className="max-w-6xl px-5 flex flex-col md:flex-row">
        {featuredImage ? (
          <div className="basis-1/1 md:basis-1/3 lg:basis-1/2 inline-block overflow-hidden rounded-lg shadow-lg">
            <Image {...addAttributes('image')} {...featuredImage} alt={featuredImage.alt} />
          </div>
        ) : null}

        <div className="basis-1/1 md:basis-2/3 lg:basis-1/2 sm:basis-1 py-6 md:pl-6">
          <h2 className="text-3xl">{name}</h2>
          {price ? (
            <div className="pt-6">
              <span className="font-bold">Price</span>: ${price}
            </div>
          ) : null}
          {description ? <div className="wysiwyg max-w-none pt-6">{description}</div> : null}
        </div>
      </div>
    </div>
  );
}
