import { draftMode } from 'next/headers';

import { Navigation, type MainNavigationFragment } from '#/components/navigation';
import { type FragmentOf } from 'gql.tada';

export async function SiteHeader(props: { navigationData: FragmentOf<typeof MainNavigationFragment> }) {
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <>
      {isDraftMode && (
        <div className="mb-4 border-b-2 border-primary bg-accent px-6 py-5 text-base text-primary" role="alert">
          You are in draft mode. As part of draft mode you can see unpublished content. To exit draft mode click{' '}
          <a className="underline" href="/api/disable-draft">
            here
          </a>
          .
        </div>
      )}
      <Navigation data={props.navigationData} />
    </>
  );
}
