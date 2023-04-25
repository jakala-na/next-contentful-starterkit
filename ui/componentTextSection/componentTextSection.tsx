import { FragmentType, graphql, useFragment } from '#/gql';
import { ComponentTextSectionItemFragment } from '#/gql/graphql';
import { RichText } from '../richText';

const ComponentTextSectionFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentTextSectionItem on ComponentTextSection {
    sys {
      id
    }
    body {
      json
    }
  }
`);

const getComponentTextSectionProps = (
  componentTextSection: ComponentTextSectionItemFragment
) => {
  const { sys, body } = componentTextSection;
  return {
    sys,
    body
  };
};

type ComponentTextSectionProps = {
  componentTextSection: FragmentType<typeof ComponentTextSectionFieldsFragment>;
};

const ComponentTextSection = (props: ComponentTextSectionProps) => {
  const componentTextSection = useFragment(
    ComponentTextSectionFieldsFragment,
    props.componentTextSection
  );
  const { sys, body } = getComponentTextSectionProps(componentTextSection);

  if (!sys.id) return null;

  return (
    <>
      <h2>ComponentTextSection</h2>
      <div>Id: {sys.id}</div>
      {body && <RichText json={body.json} />}
    </>
  );
};

export default ComponentTextSection;
