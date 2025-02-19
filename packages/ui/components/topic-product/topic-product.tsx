import { type ReactNode } from 'react';

import { Image, type ImageProps } from '@repo/ui/components/image';

export interface TopicProductProps {
  name: string | null;
  description?: ReactNode;
  featuredImage?: ImageProps | null;
  features?: string[] | null;
  price: number | null;
  addAttributes?: (name: string) => object | null;
}

export function TopicProduct({
  name,
  description,
  featuredImage,
  features,
  price,
  addAttributes = () => ({}),
}: TopicProductProps) {
  return (
    <div className="flex justify-center py-12 ">
      <div className="max-w-6xl px-5">
        <div className="flex flex-col sm:flex-row gap-6">
          {featuredImage ? (
            <div className="basis-1/1 sm:basis-1/3 lg:basis-1/2 overflow-hidden">
              <Image
                {...addAttributes('image')}
                {...featuredImage}
                alt={featuredImage.alt}
                className="rounded-lg shadow-lg"
              />
            </div>
          ) : null}

          <div className="basis-1/1 sm:basis-2/3 lg:basis-1/2">
            <h2 className="text-3xl">{name}</h2>
            {price ? (
              <div className="pt-6">
                <span className="font-bold">Price</span>: ${price}
              </div>
            ) : null}
            {description ? <div className="wysiwyg max-w-none pt-6">{description}</div> : null}
            {features ? (
              <div className="pt-6">
                <h3 className="text-xl">Features</h3>
                <ul className="pt-2">
                  {features.map((feature, index) => (
                    <li key={`feature-${index}`} className="list-disc ml-6">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
