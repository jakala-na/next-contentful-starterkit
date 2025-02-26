'use client';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';

import { getTopicProductFeatureProps } from '../topic-product-feature/topic-product-feature';
import { TopicProduct } from '@repo/ui/components/topic-product';
import type { LinkProps } from '@repo/ui/components/link';
import { useComponentPreview } from '../hooks/use-component-preview';
import { type TopicProductAddFieldsProps } from '#/components/topic-product/topic-product';

export function TopicProductClient({ data: originalData }: { data: TopicProductAddFieldsProps }) {
  const { data, addAttributes } = useComponentPreview(originalData);

  const features = data.featuresCollection?.items
    .map((feature) => {
      return feature ? getTopicProductFeatureProps({ data: feature }).name : null;
    })
    .filter((feature) => feature !== null);

  const tags: LinkProps[] = data.contentfulMetadata.concepts
    .filter((concept) => concept !== null)
    .map((concept) => {
      return {
        id: concept.id,
        children: concept.prefLabel,
        href: '#',
      };
    });

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
