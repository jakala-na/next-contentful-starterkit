import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { FragmentType, graphql, useFragment } from '#/gql';

const ComponentTextCtaFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentTextCtaItem on ComponentTextCta {
    sys {
      id
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

export type ComponentTextCtaProps = {
  componentTextCta: FragmentType<typeof ComponentTextCtaFieldsFragment>;
};

const ComponentTextCta = (props: ComponentTextCtaProps) => {
  const componentTextCta = useFragment(
    ComponentTextCtaFieldsFragment,
    props.componentTextCta
  );
  const { sys, title, subtext, buttonLabel, buttonExternalUrl } =
    componentTextCta;
  if (!sys?.id) return null;
  return (
    <>
      <h2>ComponentTextCta</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtext && (
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(subtext.json)
          }}
        />
      )}
      {buttonLabel && buttonExternalUrl && <button>{buttonLabel}</button>}
    </>
  );
};

export default ComponentTextCta;
