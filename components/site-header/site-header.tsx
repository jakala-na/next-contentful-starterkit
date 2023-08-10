import { Navigation } from "#/components/navigation";
import { draftMode } from "next/headers";

// TODO: Fix fragment unmasking to type navigationData, if possible.
export function SiteHeader(props: { navigationData: any }) {
  const { isEnabled: isDraftMode } = draftMode();
  return (
    <>
      {isDraftMode && (
        <div
          className="mb-4 bg-accent border-primary border-b-2 px-6 py-5 text-base text-primary"
          role="alert"
        >
          You are in draft mode. As part of draft mode you can see unpublished
          content. To exit draft mode click{" "}
          <a className={"underline"} href="/api/disable-draft">
            here
          </a>
          .
        </div>
      )}
      <header className="bg-background sticky top-0 z-40 w-full border-b">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Navigation data={props.navigationData} />
        </div>
      </header>
    </>
  );
}
