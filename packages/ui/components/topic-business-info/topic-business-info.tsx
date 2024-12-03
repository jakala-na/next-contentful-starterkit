import { type ReactNode } from 'react';

import { Image, type ImageProps } from '@repo/ui/components/image';

export interface TopicBusinessInfoProps {
  name: string | null;
  shortDescription?: string | null;
  body?: ReactNode;
  featuredImage?: ImageProps | null;
  addAttributes?: (name: string) => object | null;
}

export function TopicBusinessInfo({
  name,
  shortDescription,
  body,
  featuredImage,
  addAttributes = () => ({}),
}: TopicBusinessInfoProps) {
  return (
    <div className="flex justify-center py-12">
      <div className="max-w-6xl px-5">
        {featuredImage ? (
          <div className="inline-block overflow-hidden rounded-lg shadow-lg">
            <Image {...addAttributes('image')} {...featuredImage} alt={featuredImage.alt} />
          </div>
        ) : null}

        <div className="py-6">
          <h2 className="text-3xl">{name}</h2>
          {shortDescription ? <div className="pt-6">{shortDescription}</div> : null}
          {body ? <div className="wysiwyg max-w-none pt-6">{body}</div> : null}
        </div>
      </div>
    </div>
  );
}
