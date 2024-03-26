// import { draftMode } from "next/headers";
import "./globals.css";

import { cn } from "#/lib/utils";
import { fontSans } from "#/lib/fonts";
import { SiteHeader } from "#/components/contentstack/site-header";
import getHeaderRes from "#/gql/requests/getHeaderRes";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled: isDraftMode } = draftMode();
  const header = await getHeaderRes();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/*<ContentfulPreviewProvider isDraftMode={isDraftMode}>*/}
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader {...header} />
            <div className="flex-1">{children}</div>
          </div>
        {/*</ContentfulPreviewProvider>*/}
      </body>
    </html>
  );
}
