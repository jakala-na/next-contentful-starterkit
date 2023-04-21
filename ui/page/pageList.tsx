import { FragmentType, graphql, useFragment } from '#/gql';
import { PageItemFragment } from '#/gql/graphql';
import Page from './page';

export const PageBySlugQuery = graphql(/* GraphQL */ `
  fragment PageBySlugQuery on Query {
    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
        ...PageItem
      }
    }
  }
`);

export const AllPageQuery = graphql(/* GraphQL */ `
  fragment AllPageQuery on Query {
    pageCollection(preview: false) {
      items {
        __typename
        ...PageItem
      }
    }
  }
`);

type PageListProps = {
  query:
    | FragmentType<typeof PageBySlugQuery>
    | FragmentType<typeof AllPageQuery>;
  fragment: typeof PageBySlugQuery | typeof AllPageQuery;
};

const PageList = (props: PageListProps) => {
  const pageList = useFragment(props.fragment, props.query);

  if (!pageList.pageCollection?.items.length) return null;

  return (
    <>
      {pageList.pageCollection?.items.map((item) => {
        return (
          item && <Page key={(item as PageItemFragment).sys.id} page={item} />
        );
      })}
    </>
  );
};

export default PageList;
