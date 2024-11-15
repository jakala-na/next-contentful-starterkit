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
import { ComponentProps } from 'react';
import ErrorBoundary from '#/components/error-boundary/error-boundary';

type ComponentMapType = typeof componentMap;
type Data = ComponentProps<ComponentMapType[ComponentKey]>['data'];
type ComponentKey = keyof ComponentMapType;
type DataWithTypename = (Data & { __typename: string }) | { __typename: string } | null;

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
        {data.map((item, index) => {
          return <ComponentRenderer key={index} data={item} />;
        })}
      </>
    );
  }

  if (isComponentKey(data.__typename)) {
    const Component = componentMap[data.__typename];
    // At this point we know data is one of the accepted props for the component
    return (
      <ErrorBoundary>
        <Component data={data as any} />
      </ErrorBoundary>
    );
  }

  // If we don't know the component, we don't render anything
  return null;
}
