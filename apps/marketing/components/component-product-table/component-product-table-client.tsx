'use client';

import { useRouter } from 'next/navigation';

import { type ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
// eslint-disable-next-line import/no-cycle -- TODO: refactor
import { RichTextCtf } from '#/components/rich-text-ctf';

import { type ComponentProductTableFragment } from '#/components/component-product-table/component-product-table';
import { ComponentProductTable } from '@repo/ui/components/component-product-table';
import { useComponentPreview } from '../hooks/use-component-preview';

import { getTopicProductProps } from '#/components/topic-product/topic-product';
import { type CardProps } from '@repo/ui/components/card';

export function ComponentProductTableClient(props: { data: ResultOf<typeof ComponentProductTableFragment> }) {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview(originalData);
  const router = useRouter();

  const items: CardProps[] = data.productsCollection
    ? data.productsCollection.items
        .map((item) => {
          if (!item) {
            return null;
          }
          const itemProps = getTopicProductProps({ data: item });
          const image = itemProps.featuredImage
            ? getImageChildProps({
                data: itemProps.featuredImage,
                sizes: '100vw',
                priority: true,
              })
            : undefined;
          const slug = itemProps.linkedFrom?.pageCollection?.items[0]?.slug;
          return {
            headline: itemProps.name ?? undefined,
            bodyText: itemProps.description ? (
              <div {...addAttributes('bodyText')}>
                <RichTextCtf {...itemProps.description} />
              </div>
            ) : undefined,
            image: image ?? undefined,
            onClickEvent: slug
              ? () => {
                  if (slug) {
                    router.push(`/${slug}`);
                  }
                }
              : undefined,
          };
        })
        .filter((item) => item !== null)
    : [];

  return (
    <ComponentProductTable
      headline={data.headline}
      subline={data.subline}
      items={items}
      addAttributes={addAttributes}
    />
  );
}
