'use client';

import { ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';

import { getTopicProductFeatureProps } from '../topic-product-feature/topic-product-feature';
import { type TopicProductFragment } from '#/components/topic-product/topic-product';
import { TopicProduct } from '@repo/ui/components/topic-product';
import { useComponentPreview } from '../hooks/use-component-preview';

export function TopicProductClient(props: { data: ResultOf<typeof TopicProductFragment> }) {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview(originalData);

  const features = data.featuresCollection?.items
    .map((feature) => {
      return feature ? getTopicProductFeatureProps({ data: feature })?.name : null;
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
      addAttributes={addAttributes}
    />
  );
}
