import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { RichText } from '../richText';

const ComponentTextCtaFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentTextCtaItem on ComponentTextCta {
    sys {
      ...SysItem
    }
    title
    subtext {
      json
    }
    buttonLabel
    buttonExternalUrl
    link
  }
`);

type ComponentTextCtaProps = {
  componentTextCta: FragmentType<typeof ComponentTextCtaFieldsFragment>;
};

const ComponentTextCta = (props: ComponentTextCtaProps) => {
  const componentTextCta = useFragment(
    ComponentTextCtaFieldsFragment,
    props.componentTextCta
  );
  const sys = useFragment(SysFieldsFragment, componentTextCta.sys);
  const { title, subtext, buttonLabel, buttonExternalUrl } = componentTextCta;

  return (
    <>
      <h2>ComponentTextCta</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtext && <RichText json={subtext.json} />}
      {buttonLabel && buttonExternalUrl && <button>{buttonLabel}</button>}
    </>
  );
};

export default ComponentTextCta;
