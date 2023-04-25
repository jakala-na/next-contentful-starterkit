import { FragmentType, graphql, useFragment } from '#/gql';
import { ComponentTextSectionItemFragment } from '#/gql/graphql';
import { SysFieldsFragment } from '../sys';
import { RichText } from '../richText';

const ComponentTextSectionFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentTextSectionItem on ComponentTextSection {
    sys {
      ...SysItem
    }
    body {
      json
    }
  }
`);

type ComponentTextSectionProps = {
  componentTextSection: FragmentType<typeof ComponentTextSectionFieldsFragment>;
};

const ComponentTextSection = (props: ComponentTextSectionProps) => {
  const componentTextSection = useFragment(
    ComponentTextSectionFieldsFragment,
    props.componentTextSection
  );
  const sys = useFragment(SysFieldsFragment, componentTextSection.sys);
  const { body } = componentTextSection;

  return (
    <>
      <h2>ComponentTextSection</h2>
      <div>Id: {sys.id}</div>
      {body && <RichText json={body.json} />}
    </>
  );
};

export default ComponentTextSection;
