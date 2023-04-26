import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { AssetFieldsFragment } from '../asset';
import { RichText } from '../richText';
import Image from 'next/image';

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
  const image = useFragment(AssetFieldsFragment, componentImageAndText.image);
  const { title, subtext, buttonLabel, buttonExternalUrl } =
    componentImageAndText;

  return (
    <>
      <h2>ComponentImageAndText</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtext && <RichText json={subtext.json} />}
      {buttonLabel && buttonExternalUrl && <button>{buttonLabel}</button>}
      {image?.url && image.width && image.height && (
        <div>
          <Image
            src={image.url}
            width={image.width / 2}
            height={image.height / 2}
            alt={image.description || image.title || 'Untitled'}
          />
        </div>
      )}
    </>
  );
};

export default ComponentImageAndText;
