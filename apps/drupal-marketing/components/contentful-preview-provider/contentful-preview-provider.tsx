'use client';

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

function ContentfulPreviewProvider({
  locale,
  isDraftMode,
  isContentSourceMapsEnabled,
  children,
}: {
  locale: string;
  isDraftMode: boolean;
  isContentSourceMapsEnabled: boolean;
  children: React.ReactNode;
}) {
  const previewActive = isDraftMode;
  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
      experimental={{ ignoreManuallyTaggedElements: isContentSourceMapsEnabled }}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
}

export default ContentfulPreviewProvider;
