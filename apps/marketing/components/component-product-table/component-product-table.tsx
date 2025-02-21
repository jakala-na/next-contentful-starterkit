import { type FragmentOf, graphql, readFragment } from 'gql.tada';

import { ComponentProductTableClient } from './component-product-table-client';
import { TopicProductFragment } from '../topic-product/topic-product';

export const ComponentProductTableFragment = graphql(
  `
    fragment ComponentProductTable on ComponentProductTable {
      __typename
      sys {
        id
      }
      headline
      subline
      productsCollection {
        items {
          ...TopicProduct
        }
      }
    }
  `,
  [TopicProductFragment]
);

export interface ComponentProductTableProps {
  data: FragmentOf<typeof ComponentProductTableFragment> & Record<string, any>;
}

export function ComponentProductTable(props: ComponentProductTableProps) {
  const data = readFragment(ComponentProductTableFragment, props.data);
  return <ComponentProductTableClient data={data} />;
}
