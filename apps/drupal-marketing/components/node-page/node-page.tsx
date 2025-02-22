import { type FragmentOf, graphql, readFragment } from 'gql.tada';
import { ComponentRenderer } from '../component-renderer';
import { ComponentHeroBannerFieldsFragment } from '../paragraphs/hero-banner/hero-banner';
import { DataWithTypename } from '../component-renderer/component-renderer';

export const NodePageFragment = graphql(
  `
    fragment NodePage on NodePage {
      __typename
      title
      components {
        __typename
        ...ComponentHeroBannerFields
      }
    }
  `,
  [ComponentHeroBannerFieldsFragment]
);

export function NodePage(props: { data: FragmentOf<typeof NodePageFragment> }) {
  const data = readFragment(NodePageFragment, props.data);
  return (
    <div>
      <h1 className="sr-only">{data.title}</h1>
      <ComponentRenderer data={data.components as DataWithTypename} />
    </div>
  );
}
