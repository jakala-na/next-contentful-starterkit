'use client';

import { type ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';

import { type ComponentProductTableFragment } from '#/components/component-product-table/component-product-table';
import { ComponentProductTable } from '@repo/ui/components/component-product-table';
import { useComponentPreview } from '../hooks/use-component-preview';

import { getTopicProductProps } from '#/components/topic-product/topic-product';
import { type CardProps } from '@repo/ui/components/card';

export function ComponentProductTableClient(props: { data: ResultOf<typeof ComponentProductTableFragment> }) {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview(originalData);

  const items: CardProps[] = data.productsCollection
    ? data.productsCollection?.items
        .map((item) => {
          if (!item) {
            return null;
          }
          const itemProps = getTopicProductProps({ data: item });
          return {
            headline: itemProps.name,
            bodyText: itemProps.description ? (
              <div {...addAttributes('bodyText')}>
                <RichTextCtf {...itemProps.description} />
              </div>
            ) : null,
            image: itemProps.featuredImage
              ? getImageChildProps({
                  data: itemProps.featuredImage,
                  sizes: '100vw',
                  priority: true,
                })
              : null,
          };
        })
        .filter((item) => item !== null)
    : [];

  return (
    <ComponentProductTable
      id={data.sys.id}
      headline={data.headline}
      subline={data.subline}
      items={items}
      addAttributes={addAttributes}
    />
  );
}
