'use client';

import { type ReactNode } from 'react';
import { type ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { TopicProduct } from '@repo/ui/components/topic-product';

import { getTopicProductFeatureProps } from '../topic-product-feature/topic-product-feature';
import { useComponentPreview } from '../hooks/use-component-preview';
import { type TopicProductFragment } from './topic-product';

export function TopicProductClient({
  data: originalData,
  tags,
}: {
  data: ResultOf<typeof TopicProductFragment>;
  tags: ReactNode[];
}) {
  const { data, addAttributes } = useComponentPreview(originalData);

  const features = data.featuresCollection?.items
    .map((feature) => {
      return feature ? getTopicProductFeatureProps({ data: feature }).name : null;
    })
    .filter((feature) => feature !== null);

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
      features={features}
      price={data.price}
      tags={tags}
      addAttributes={addAttributes}
    />
  );
}
