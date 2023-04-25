import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { ImageAsset } from '../asset';
import { RichText } from '../richText';

const ComponentImageAndTextFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentImageAndTextItem on ComponentImageAndText {
    sys {
      ...SysItem
    }
    title
    subtext {
      json
    }
    buttonLabel
    buttonExternalUrl
    image {
      ...AssetItem
    }
  }
`);

type ComponentImageAndTextProps = {
  componentImageAndText: FragmentType<
    typeof ComponentImageAndTextFieldsFragment
  >;
};

const ComponentImageAndText = (props: ComponentImageAndTextProps) => {
  const componentImageAndText = useFragment(
    ComponentImageAndTextFieldsFragment,
    props.componentImageAndText
  );
  const sys = useFragment(SysFieldsFragment, componentImageAndText.sys);
  const { title, subtext, buttonLabel, buttonExternalUrl, image } =
    componentImageAndText;

  return (
    <>
      <h2>ComponentImageAndText</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtext && <RichText json={subtext.json} />}
      {buttonLabel && buttonExternalUrl && <button>{buttonLabel}</button>}
      {image && (
        <div>
          <ImageAsset asset={image} />
        </div>
      )}
    </>
  );
};

export default ComponentImageAndText;
