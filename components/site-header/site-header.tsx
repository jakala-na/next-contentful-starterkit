import { draftMode } from 'next/headers';
import Link from 'next/link';

import { Navigation } from '#/components/navigation';

// TODO: Fix fragment unmasking to type navigationData, if possible.
export async function SiteHeader(props: { navigationData: any }) {
  const isDraftMode = (await draftMode()).isEnabled;
  return (
    <>
      {isDraftMode && (
        <div className="mb-4 border-b-2 border-primary bg-accent px-6 py-5 text-base text-primary" role="alert">
          You are in draft mode. As part of draft mode you can see unpublished content. To exit draft mode click{' '}
          <Link className={'underline'} href="/api/disable-draft">
            here
          </Link>
          .
        </div>
      )}
      <Navigation data={props.navigationData} />
    </>
  );
}
