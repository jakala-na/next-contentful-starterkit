import { FragmentType, graphql, useFragment } from '#/gql';
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
  const sys = useFragment(SysFieldsFragment, pageLanding.sys);
  const { name, sectionsCollection } = pageLanding;

  return (
    <>
      <h1>{name}</h1>
      <div>Id: {sys.id}</div>
      {sectionsCollection?.items.map((item, index) => {
        if (!item?.__typename) return null;
        const key = `${sys.id}-section-${index}`;

        switch (item.__typename) {
          case 'ComponentTextSection':
            return (
              <ComponentTextSection key={key} componentTextSection={item} />
            );
          case 'ComponentTextCta':
            return <ComponentTextCta key={key} componentTextCta={item} />;
          case 'ComponentImageAndText':
            return (
              <ComponentImageAndText key={key} componentImageAndText={item} />
            );
          case 'ComponentMarqueeBanner':
            return (
              <ComponentMarqueeBanner key={key} componentMarqueeBanner={item} />
            );
          case 'ComponentThreeCardCollection':
            return (
              <ComponentThreeCardCollection
                key={key}
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
