import { FragmentType, graphql, useFragment } from '#/gql';
import { ComponentImageAndText } from '../componentImageAndText';
import { ComponentMarqueeBanner } from '../componentMarqueeBanner';
import { ComponentTextCta } from '../componentTextCta';
import { ComponentTextSection } from '../componentTextSection';
import { ComponentThreeCardCollection } from '../componentThreeCardCollection';

const PageLandingFieldsFragment = graphql(/* GraphQL */ `
  fragment PageLandingItem on PageLanding {
    sys {
      id
    }
    name
    sectionsCollection(preview: false) {
      items {
        __typename
        ... on ComponentTextCta {
          ...ComponentTextCtaItem
        }
        ... on ComponentTextSection {
          ...ComponentTextSectionItem
        }
        ... on ComponentImageAndText {
          ...ComponentImageAndTextItem
        }
        ... on ComponentMarqueeBanner {
          ...ComponentMarqueeBannerItem
        }
        ... on ComponentThreeCardCollection {
          ...ComponentThreeCardCollectionItem
        }
      }
    }
  }
`);

type PageLandingProps = {
  pageLanding: FragmentType<typeof PageLandingFieldsFragment>;
};

const PageLanding = (props: PageLandingProps) => {
  const pageLanding = useFragment(PageLandingFieldsFragment, props.pageLanding);
  const { sys, name, sectionsCollection } = pageLanding;

  if (!sys?.id) return null;

  return (
    <>
      <h1>{name}</h1>
      <div>Id: {sys.id}</div>
      {sectionsCollection?.items.map((item, idx) => {
        if (!item) return null;

        switch (item.__typename) {
          case 'ComponentTextSection':
            return (
              <ComponentTextSection key={idx} componentTextSection={item} />
            );
          case 'ComponentTextCta':
            return <ComponentTextCta key={idx} componentTextCta={item} />;
          case 'ComponentImageAndText':
            return (
              <ComponentImageAndText key={idx} componentImageAndText={item} />
            );
          case 'ComponentMarqueeBanner':
            return (
              <ComponentMarqueeBanner key={idx} componentMarqueeBanner={item} />
            );
          case 'ComponentThreeCardCollection':
            return (
              <ComponentThreeCardCollection
                key={idx}
                componentThreeCardCollection={item}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default PageLanding;
