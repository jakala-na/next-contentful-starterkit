import { FragmentType, graphql, useFragment } from '#/gql';
import { PageItemFragment } from '#/gql/graphql';
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

const PageBySlugQueryFragment = graphql(/* GraphQL */ `
  fragment PageBySlugQueryFragment on Query {
    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        ...PageItem
      }
    }
  }
`);

type PageProps = {
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

type PageListProps = {
  query: FragmentType<typeof PageBySlugQueryFragment>;
};

export const PageList = (props: PageListProps) => {
  const pages = useFragment(PageBySlugQueryFragment, props.query);

  return (
    <>
      {pages.pageCollection?.items.map((page) => (
        <Page key={(page as PageItemFragment)?.sys.id} page={page} />
      ))}
    </>
  );
};
