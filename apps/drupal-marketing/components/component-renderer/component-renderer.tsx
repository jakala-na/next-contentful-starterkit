/**
 * ComponentRenderer is a component that renders components based on the data supplied.
 *
 * A few ground principles for ComponentRenderer
 *
 * 1. It should accept data and decide which component(s) to render
 * 2. It should allow arrays of data to be passed and handle null/undefined
 * 3. As a proxy, it should let you know if it can't render the component you're asking because you didn't provide enough data.
 * 4. It should be able to render the component(s) with the data you provided.
 * 5. It should skip rendering if component is not found in the componentMap.
 */

import { componentMap } from './mappings';
import { type ComponentProps } from 'react';

interface BaseData {
  __typename: string;
  id: string;
}

type ComponentMapType = typeof componentMap;
type Data = ComponentProps<ComponentMapType[ComponentKey]>['data'];
type ComponentKey = keyof ComponentMapType;
export type DataWithTypename = (Data & BaseData) | BaseData | null;

function isComponentKey(key: string): key is ComponentKey {
  return key in componentMap;
}

export default function ComponentRenderer<T extends DataWithTypename | DataWithTypename[]>({ data }: { data: T }) {
  if (data === null) {
    return null;
  }

  // If we have an array, we render each item in the array
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item) => {
          if (item === null) {
            return null;
          }
          if (isComponentKey(item.__typename)) {
            return <ComponentRenderer key={item.id} data={item} />;
          }
          return null;
        })}
      </>
    );
  }

  if (isComponentKey(data.__typename)) {
    const Component = componentMap[data.__typename];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment -- At this point we know data is one of the accepted props for the component
    return <Component data={data as any} />;
  }

  return null;
}
