'use client';

import { ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { TopicBusinessInfo } from '#/components/ui/topic-business-info';

import { useComponentPreview } from '../hooks/use-component-preview';
import { ComponentTopicBusinessInfoFieldsFragment } from './topic-business-info';

export const TopicBusinessInfoClient: React.FC<{
  data: ResultOf<typeof ComponentTopicBusinessInfoFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);

  return (
    <TopicBusinessInfo
      name={data.name}
      shortDescription={data.shortDescription}
      body={
        data.body && (
          <div {...addAttributes('bodyText')}>
            <RichTextCtf {...data.body} />
          </div>
        )
      }
      featuredImage={
        data.featuredImage &&
        getImageChildProps({
          data: data.featuredImage,
          sizes: '100vw',
          priority: true,
        })
      }
      addAttributes={addAttributes}
    />
  );
};
