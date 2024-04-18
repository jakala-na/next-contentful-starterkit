import { FragmentOf, readFragment, graphql } from "gql.tada";
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
  data: FragmentOf<typeof ComponentFormFieldsFragment>;
};

export const FormCtf: React.FC<FormProps> = (props) => {
  const data = readFragment(ComponentFormFieldsFragment, props.data);
  return <FormCtfClient data={data}/>;
};
