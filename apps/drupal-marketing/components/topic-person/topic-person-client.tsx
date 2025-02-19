'use client';

import { type ResultOf } from 'gql.tada';

import { getImageChildProps } from '#/components/image-ctf';
// eslint-disable-next-line import/no-cycle -- TODO: refactor
import { RichTextCtf } from '#/components/rich-text-ctf';
import { TopicPerson } from '@repo/ui/components/topic-person';

import { useComponentPreview } from '../hooks/use-component-preview';
import { type TopicPersonFieldsFragment } from './topic-person';

export function TopicPersonClient(props: { data: ResultOf<typeof TopicPersonFieldsFragment> }) {
  const { data: originalData } = props;
  const { data, addAttributes } = useComponentPreview(originalData);

  return (
    <TopicPerson
      name={data.name}
      bio={
        data.bio ? (
          <div {...addAttributes('bodyText')}>
            <RichTextCtf {...data.bio} />
          </div>
        ) : null
      }
      avatar={
        data.avatar
          ? getImageChildProps({
              data: data.avatar,
            })
          : null
      }
      website={data.website}
      location={data.location}
      cardStyle={data.cardStyle}
      addAttributes={addAttributes}
    />
  );
}
