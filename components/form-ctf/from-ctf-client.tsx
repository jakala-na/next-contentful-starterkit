'use client';

import { ComponentFormFieldsFragment } from '#/gql/graphql';
import { formsMap } from '../forms/forms-mapping';
import { useComponentPreview } from '../hooks/use-component-preview';
import { FormContainer } from '../ui/form-container';

export const FormCtfClient: React.FC<{
  data: ComponentFormFieldsFragment;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } =
    useComponentPreview<ComponentFormFieldsFragment>(originalData);
  if(data.form) {
    // @TODO: Fix typings for formsMap.
    // @ts-ignore
    const Form =  formsMap[data.form];

    return <FormContainer form={<Form />} headline={data.headline} addAttributes={addAttributes}/> ;
  }

  return null;
};
