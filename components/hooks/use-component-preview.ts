'use client';

import { Entity } from '@contentful/live-preview/dist/types';
import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react';

type Argument = Entity & { sys: { id: string } };

export const useComponentPreview = <T extends Argument>(data: T) => {
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
