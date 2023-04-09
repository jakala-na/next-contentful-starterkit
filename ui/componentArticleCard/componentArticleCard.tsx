import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { FragmentType, graphql, useFragment } from '#/gql';
import Image from 'next/image';

const ComponentArticleCardFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentArticleCardItem on ComponentArticleCard {
    sys {
      id
    }
    eyebrow
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

export type ComponentArticleCardProps = {
  componentArticleCard: FragmentType<typeof ComponentArticleCardFieldsFragment>;
};

const ComponentArticleCard = (props: ComponentArticleCardProps) => {
  const componentArticleCard = useFragment(
    ComponentArticleCardFieldsFragment,
    props.componentArticleCard
  );
  const {
    sys,
    eyebrow,
    title,
    subtext,
    buttonLabel,
    buttonExternalUrl,
    image
  } = componentArticleCard;

  if (!sys?.id) return null;

  return (
    <>
      <h2>ComponentArticleCard</h2>
      <div>Id: {sys.id}</div>
      <h3>{eyebrow}</h3>
      <h4>{title}</h4>
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

export default ComponentArticleCard;
