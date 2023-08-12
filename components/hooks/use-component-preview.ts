"use client";

import { Entity } from "@contentful/live-preview/dist/types";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

export const useComponentPreview = (data: Entity) => {
  const previewData = useContentfulLiveUpdates(data);
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
