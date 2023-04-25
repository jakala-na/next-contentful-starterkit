import { FragmentType, graphql, useFragment } from '#/gql';
import { ImageAsset } from '../asset';
import { RichText } from '../richText';

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
      ...AssetItem
    }
  }
`);

type ComponentArticleCardProps = {
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

export default ComponentArticleCard;
