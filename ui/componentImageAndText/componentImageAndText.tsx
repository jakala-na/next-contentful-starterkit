import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { FragmentType, graphql, useFragment } from '#/gql';
import Image from 'next/image';

const ComponentImageAndTextFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentImageAndTextItem on ComponentImageAndText {
    sys {
      id
    }
    title
    subtext {
      json
    }
    buttonLabel
    buttonExternalUrl
    image {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
  }
`);

export type ComponentImageAndTextProps = {
  componentImageAndText: FragmentType<
    typeof ComponentImageAndTextFieldsFragment
  >;
};

const ComponentImageAndText = (props: ComponentImageAndTextProps) => {
  const componentImageAndText = useFragment(
    ComponentImageAndTextFieldsFragment,
    props.componentImageAndText
  );
  const { sys, title, subtext, buttonLabel, buttonExternalUrl, image } =
    componentImageAndText;

  if (!sys?.id) return null;

  return (
    <>
      <h2>ComponentImageAndText</h2>
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
      {image && image.url && image.width && image.height && (
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
