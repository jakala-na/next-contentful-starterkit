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

const PageBySlugQuery = graphql(/* GraphQL */ `
  fragment PageBySlugQuery on Query {
    pageCollection(limit: 1, where: { slug: $slug }, preview: false) {
      items {
        __typename
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

  return (
    <>
      <h1>{title}</h1>
      <div>Id: {sys.id}</div>
      {content && <PageLanding pageLanding={content} />}
    </>
  );
};

export default Page;
