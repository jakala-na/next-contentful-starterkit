import { FragmentType, graphql, useFragment } from '#/gql';
import { SysFieldsFragment } from '../sys';
import { ComponentArticleCard } from '../componentArticleCard';
import { RichText } from '../richText';

const ComponentThreeCardCollectionFieldsFragment = graphql(/* GraphQL */ `
  fragment ComponentThreeCardCollectionItem on ComponentThreeCardCollection {
    sys {
      ...SysItem
    }
    title
    subtext {
      json
    }
    buttonLabel
    buttonExternalUrl
    cardsCollection(limit: 3, preview: false) {
      items {
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
  const sys = useFragment(SysFieldsFragment, componentThreeCardCollection.sys);
  const { title, subtext, buttonLabel, buttonExternalUrl, cardsCollection } =
    componentThreeCardCollection;

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
