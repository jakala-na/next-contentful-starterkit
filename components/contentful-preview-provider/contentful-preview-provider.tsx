'use client';

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

const ContentfulPreviewProvider = ({ isDraftMode, children }: { isDraftMode: boolean; children: any }) => {
  const previewActive = isDraftMode;
  return (
    <ContentfulLivePreviewProvider
      locale={'en-US'}
      enableInspectorMode={previewActive}
      enableLiveUpdates={previewActive}
      experimental={{ ignoreManuallyTaggedElements: true }}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
};

export default ContentfulPreviewProvider;
