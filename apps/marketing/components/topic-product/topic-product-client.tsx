'use client';

import { type ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { TopicProduct } from '@repo/ui/components/topic-product';

import { useComponentPreview } from '../hooks/use-component-preview';
import { type TopicProductFieldsFragment } from './topic-product';

export function TopicProductClient({ data: originalData }: { data: ResultOf<typeof TopicProductFieldsFragment> }) {
  const { data, addAttributes } = useComponentPreview(originalData);

  return (
    <TopicProduct
      name={data.name}
      description={
        data.description ? (
          <div {...addAttributes('bodyText')}>
            <RichTextCtf {...data.description} />
          </div>
        ) : null
      }
      featuredImage={
        data.featuredImage
          ? getImageChildProps({
              data: data.featuredImage,
              sizes: '100vw',
              priority: true,
            })
          : null
      }
      price={data.price}
      addAttributes={addAttributes}
    />
  );
}
