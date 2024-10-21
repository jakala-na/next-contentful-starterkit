import { ReactNode } from 'react';

import { Image, ImageProps } from '#/components/ui/image';

export interface TopicBusinessInfoProps {
  name: string | null;
  shortDescription?: string | null;
  body?: ReactNode;
  featuredImage?: ImageProps | null;
  addAttributes?: (name: string) => object | null;
}

export const TopicBusinessInfo = ({
  name,
  shortDescription,
  body,
  featuredImage,
  addAttributes = () => ({}),
}: TopicBusinessInfoProps) => {
  return (
    <div className="flex justify-center py-12">
      <div className="max-w-6xl px-5">
        {featuredImage && (
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image {...addAttributes('image')} {...featuredImage} alt={featuredImage.alt} />
          </div>
        )}

        <div className="py-6">
          <h2 className="text-3xl">{name}</h2>
          {shortDescription && <div className="pt-6">{shortDescription}</div>}
          {body && <div className="wysiwyg pt-6">{body}</div>}
        </div>
      </div>
    </div>
  );
};
