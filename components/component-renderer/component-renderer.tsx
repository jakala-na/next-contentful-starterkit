import ErrorBoundary from '#/components/error-boundary/error-boundary';

import { componentMap } from './mappings';

export default function ComponentRenderer({
  data,
}: {
  data: any; // @TODO: Fixme
}) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item) => {
          if (!item?.sys?.id) {
            return null;
          }

          return <ComponentRenderer key={item.sys.id} data={item} />;
        })}
      </>
    );
  }

  if (!data?.__typename) {
    return null;
  }

  // @TODO: Fix typings for componentMap.
  // @ts-ignore

  // @TODO: Fix typings for componentMap.
  // @ts-ignore
  const Component = componentMap[data.__typename];
  if (Component) {
    return (
      <ErrorBoundary>
        <Component data={data} />
      </ErrorBoundary>
    );
  }

  return null;
}
