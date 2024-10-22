'use client';

import { ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { TopicPerson } from '#/components/ui/topic-person';

import { useComponentPreview } from '../hooks/use-component-preview';
import { ComponentTopicPersonFieldsFragment } from '././topic-person';

export const TopicPersonClient: React.FC<{
  data: ResultOf<typeof ComponentTopicPersonFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview<typeof originalData>(originalData);

  return (
    <TopicPerson
      name={data.name}
      bio={
        data.bio && (
          <div {...addAttributes('bodyText')}>
            <RichTextCtf {...data.bio} />
          </div>
        )
      }
      avatar={
        data.avatar &&
        getImageChildProps({
          data: data.avatar,
        })
      }
      website={data.website}
      location={data.location}
      cardStyle={data.cardStyle}
      addAttributes={addAttributes}
    />
  );
};
