import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { FragmentType, graphql, useFragment } from '#/gql';
import { ComponentArticleCard } from '../componentArticleCard';

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

export type ComponentThreeCardCollectionProps = {
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
      {subtext && (
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(subtext.json)
          }}
        />
      )}
      {buttonLabel && buttonExternalUrl && <button>{buttonLabel}</button>}
      {cardsCollection?.items.map((item, idx) => {
        if (!item) return null;
        return <ComponentArticleCard key={idx} componentArticleCard={item} />;
      })}
    </>
  );
};

export default ComponentThreeCardCollection;
