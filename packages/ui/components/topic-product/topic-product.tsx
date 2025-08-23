import { type ReactNode } from 'react';

import { Image, type ImageProps } from '@repo/ui/components/image';

export interface TopicProductProps {
  name: string | null;
  description?: ReactNode;
  featuredImage?: ImageProps | null;
  features?: string[] | null;
  price: number | null;
  tags?: ReactNode[] | null;
  addAttributes?: (name: string) => object | null;
}

export function TopicProduct({
  name,
  description,
  featuredImage,
  features,
  price,
  tags,
  addAttributes = () => ({}),
}: TopicProductProps) {
  return (
    <div className="flex justify-center py-12 ">
      <div className="max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row">
          {featuredImage ? (
            <div className="basis-1/1 overflow-hidden sm:basis-1/3 lg:basis-1/2">
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
              <div className="mt-6">
                <span className="font-bold">${price}</span>
              </div>
            ) : null}
            {description ? <div className="wysiwyg max-w-none">{description}</div> : null}
            {features ? (
              <div className="mt-6">
                <ul>
                  {features.map((feature, index) => (
                    <li key={`feature-${index}`} className="ml-6 list-disc">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {tags ? <div className="mt-6 flex flex-wrap gap-2">{tags}</div> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
