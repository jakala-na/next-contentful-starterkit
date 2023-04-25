import { FragmentType, graphql, useFragment } from '#/gql';
import {
  ComponentImageAndTextItemFragment,
  ComponentMarqueeBannerItemFragment,
  ComponentTextCtaItemFragment,
  ComponentTextSectionItemFragment,
  ComponentThreeCardCollectionItemFragment
} from '#/gql/graphql';
import { SysFieldsFragment } from '../sys';
import { ComponentImageAndText } from '../componentImageAndText';
import { ComponentMarqueeBanner } from '../componentMarqueeBanner';
import { ComponentTextCta } from '../componentTextCta';
import { ComponentTextSection } from '../componentTextSection';
import { ComponentThreeCardCollection } from '../componentThreeCardCollection';

const PageLandingFieldsFragment = graphql(/* GraphQL */ `
  fragment PageLandingItem on PageLanding {
    sys {
      ...SysItem
    }
    name
    sectionsCollection(preview: false) {
      items {
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
  const sys = useFragment(SysFieldsFragment, pageLanding.sys);
  const { name, sectionsCollection } = pageLanding;

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
                key={sys.id}
                componentTextSection={item}
              />
            );
          case 'ComponentTextCta':
            return (
              <ComponentTextCta
                key={sys.id}
                componentTextCta={item}
              />
            );
          case 'ComponentImageAndText':
            return (
              <ComponentImageAndText
                key={sys.id}
                componentImageAndText={item}
              />
            );
          case 'ComponentMarqueeBanner':
            return (
              <ComponentMarqueeBanner
                key={sys.id}
                componentMarqueeBanner={item}
              />
            );
          case 'ComponentThreeCardCollection':
            return (
              <ComponentThreeCardCollection
                key={sys.id}
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
