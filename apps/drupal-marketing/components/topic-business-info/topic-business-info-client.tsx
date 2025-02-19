'use client';

import { type ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { TopicBusinessInfo } from '@repo/ui/components/topic-business-info';

import { useComponentPreview } from '../hooks/use-component-preview';
import { type TopicBusinessInfoFieldsFragment } from './topic-business-info';

export function TopicBusinessInfoClient({
  data: originalData,
}: {
  data: ResultOf<typeof TopicBusinessInfoFieldsFragment>;
}) {
  const { data, addAttributes } = useComponentPreview(originalData);

  return (
    <TopicBusinessInfo
      name={data.name}
      shortDescription={data.shortDescription}
      body={
        data.body ? (
          <div {...addAttributes('bodyText')}>
            <RichTextCtf {...data.body} />
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
      addAttributes={addAttributes}
    />
  );
}
