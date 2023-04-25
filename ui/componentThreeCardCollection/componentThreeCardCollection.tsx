import { FragmentType, graphql, useFragment } from '#/gql';
import { ComponentArticleCard } from '../componentArticleCard';
import { RichText } from '../richText';

const ComponentThreeCardCollectionFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentThreeCardCollectionItem on ComponentThreeCardCollection {
    sys {
      id
    }
    title
    subtext {
      json
    }
    buttonLabel
    buttonExternalUrl
    cardsCollection(limit: 3, preview: false) {
      items {
        __typename
        ...ComponentArticleCardItem
      }
    }
  }
`);

type ComponentThreeCardCollectionProps = {
  componentThreeCardCollection: FragmentType<
    typeof ComponentThreeCardCollectionFieldsFragment
  >;
};

const ComponentThreeCardCollection = (
  props: ComponentThreeCardCollectionProps
) => {
  const componentThreeCardCollection = useFragment(
    ComponentThreeCardCollectionFieldsFragment,
    props.componentThreeCardCollection
  );
  const {
    sys,
    title,
    subtext,
    buttonLabel,
    buttonExternalUrl,
    cardsCollection
  } = componentThreeCardCollection;

  if (!sys?.id) return null;

  return (
    <>
      <h2>ComponentThreeCardCollection</h2>
      <div>Id: {sys.id}</div>
      <h3>{title}</h3>
      {subtext && <RichText json={subtext.json} />}
      {buttonLabel && buttonExternalUrl && <button>{buttonLabel}</button>}
      {cardsCollection?.items.map((item, idx) => {
        if (!item) return null;
        return <ComponentArticleCard key={idx} componentArticleCard={item} />;
      })}
    </>
  );
};

export default ComponentThreeCardCollection;
