'use client';
import { Argument } from '@contentful/live-preview/dist/types';
import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react';

export const useComponentPreview = <T extends Argument>(data: (typeof useContentfulLiveUpdates)['arguments'][0]) => {
  const previewData = useContentfulLiveUpdates<T>(data);
  const inspectorProps = useContentfulInspectorMode({
    entryId: data.sys.id,
  });

  const addAttributes = (name: string) => {
    return inspectorProps({ fieldId: name });
  };

  return {
    data: previewData,
    addAttributes,
  };
};
