import { FragmentType, getFragmentData, graphql } from '#/gql';
import { FormCtfClient } from './from-ctf-client';

export const ComponentFormFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentFormFields on ComponentForm {
    __typename
    sys {
      id
    }
    headline
    form
  }
`);

export type FormProps = {
  data: FragmentType<typeof ComponentFormFieldsFragment>;
};

export const FormCtf: React.FC<FormProps> = (props) => {
  const data = getFragmentData(ComponentFormFieldsFragment, props.data);
  return <FormCtfClient data={data}/>;
};
