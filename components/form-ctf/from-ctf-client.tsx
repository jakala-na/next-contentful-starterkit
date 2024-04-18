'use client';

import { formsMap } from '../forms/forms-mapping';
import { useComponentPreview } from '../hooks/use-component-preview';
import { FormContainer } from '../ui/form-container';
import {ResultOf} from "gql.tada";
import {ComponentFormFieldsFragment} from "#/components/form-ctf/form-ctf";

export const FormCtfClient: React.FC<{
  data: ResultOf<typeof ComponentFormFieldsFragment>;
}> = (props) => {
  const { data: originalData } = props;
  const { data, addAttributes } =
    useComponentPreview<typeof originalData>(originalData);
  if(data.form) {
    // @TODO: Fix typings for formsMap.
    // @ts-ignore
    const Form =  formsMap[data.form];

    return <FormContainer form={<Form />} headline={data.headline} addAttributes={addAttributes}/> ;
  }

  return null;
};
