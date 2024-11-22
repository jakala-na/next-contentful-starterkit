'use client';

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

const ContentfulPreviewProvider = ({
  isDraftMode,
  isContentSourceMapsEnabled,
  children,
}: {
  isDraftMode: boolean;
  isContentSourceMapsEnabled: boolean;
  children: any;
}) => {
  const previewActive = isDraftMode;
  return (
    <ContentfulLivePreviewProvider
      locale={'en-US'}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
      experimental={{ ignoreManuallyTaggedElements: isContentSourceMapsEnabled }}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

export default ContentfulPreviewProvider;
