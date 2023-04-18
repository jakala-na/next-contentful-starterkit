import { FragmentType, graphql, useFragment } from '#/gql';
import {
  ComponentImageAndTextItemFragment,
  ComponentMarqueeBannerItemFragment,
  ComponentTextCtaItemFragment,
  ComponentTextSectionItemFragment,
  ComponentThreeCardCollectionItemFragment
} from '#/gql/graphql';
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
      {sectionsCollection?.items.map((item) => {
        if (!item) return null;

        switch (item.__typename) {
          case 'ComponentTextSection':
            return (
              <ComponentTextSection
                key={(item as ComponentTextSectionItemFragment)?.sys.id}
                componentTextSection={item}
              />
            );
          case 'ComponentTextCta':
            return (
              <ComponentTextCta
                key={(item as ComponentTextCtaItemFragment)?.sys.id}
                componentTextCta={item}
              />
            );
          case 'ComponentImageAndText':
            return (
              <ComponentImageAndText
                key={(item as ComponentImageAndTextItemFragment)?.sys.id}
                componentImageAndText={item}
              />
            );
          case 'ComponentMarqueeBanner':
            return (
              <ComponentMarqueeBanner
                key={(item as ComponentMarqueeBannerItemFragment)?.sys.id}
                componentMarqueeBanner={item}
              />
            );
          case 'ComponentThreeCardCollection':
            return (
              <ComponentThreeCardCollection
                key={(item as ComponentThreeCardCollectionItemFragment)?.sys.id}
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
