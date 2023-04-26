import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { AssetFieldsFragment } from '../asset';
import { RichText } from '../richText';
import Image from 'next/image';

const ComponentArticleCardFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentArticleCardItem on ComponentArticleCard {
    sys {
      ...SysItem
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
  const sys = useFragment(SysFieldsFragment, componentArticleCard.sys);
  const image = useFragment(AssetFieldsFragment, componentArticleCard.image);
  const { eyebrow, title, subtext, buttonLabel, buttonExternalUrl } =
    componentArticleCard;

  return (
    <>
      <h2>ComponentArticleCard</h2>
      <div>Id: {sys.id}</div>
      <h3>{eyebrow}</h3>
      <h4>{title}</h4>
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

export default ComponentArticleCard;
