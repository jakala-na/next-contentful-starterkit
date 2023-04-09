import { FragmentType, graphql, useFragment } from '#/gql';
import { PageLanding } from '../pageLanding';

const PageFieldsFragment = graphql(/* GraphQL */ `
  fragment PageItem on Page {
    sys {
      id
    }
    slug
    title
    content {
      __typename
      ... on PageLanding {
        ...PageLandingItem
      }
    }
  }
`);

export type PageProps = {
  page: FragmentType<typeof PageFieldsFragment>;
};

const Page = (props: PageProps) => {
  const page = useFragment(PageFieldsFragment, props.page);
  const { sys, title, content } = page;

  if (!sys?.id) return null;

  return (
    <>
      <h1>{title}</h1>
      <div>Id: {sys.id}</div>
      {content?.__typename === 'PageLanding' && (
        <PageLanding pageLanding={content} />
      )}
    </>
  );
};

export default Page;
