'use client';

import { Duplex } from '../ui/duplex';
import { ComponentDuplexFieldsFragment } from '#/gql/graphql';
import { RichTextCtf } from '#/components/rich-text-ctf';
import { getPageLinkChildProps } from '../page';
import { useComponentPreview } from '../hooks/use-component-preview';
import { getImageChildProps } from '../image-ctf';

export const DuplexCtfClient: React.FC<{
  data: ComponentDuplexFieldsFragment;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } =
    useComponentPreview<ComponentDuplexFieldsFragment>(originalData);

    return (
    <Duplex
      headline={data.headline}
      bodyText={data.bodyText && <RichTextCtf {...data.bodyText} />}
      image={
        data.image &&
        getImageChildProps({
          data: data.image,
          priority: true,
          sizes: "100vw",
        })
      }
      imageAlignment={data.containerLayout ? 'left' : 'right'}
      addAttributes={addAttributes}
    />
  );
};
