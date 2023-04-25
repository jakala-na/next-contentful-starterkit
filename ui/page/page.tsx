import { FragmentType, graphql, useFragment } from '#/gql';
import { PageLanding } from '../pageLanding';
import { SysFieldsFragment } from '../sys';

const PageFieldsFragment = graphql(/* GraphQL */ `
  fragment PageItem on Page {
    sys {
      ...SysItem
    }
    slug
    title
    content {
      ... on PageLanding {
        ...PageLandingItem
      }
    }
  }
`);

type PageProps = {
  page: FragmentType<typeof PageFieldsFragment>;
};

type Time = {
  unixtime: number;
};

const wait = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const Page = async (props: PageProps) => {
  const page = useFragment(PageFieldsFragment, props.page);
  const sys = useFragment(SysFieldsFragment, page.sys);
  const { title, content } = page;

  // const delay = await wait(2000);
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Toronto',
    {
      next: {
        revalidate: 5
      }
    }
  );
  const datetime: Time = await res.json();

  return (
    <>
      <p>Page time: {datetime.unixtime}</p>
      <h1>{title}</h1>
      <div>Id: {sys.id}</div>
      {content && <PageLanding pageLanding={content} />}
    </>
  );
};

export default Page;
