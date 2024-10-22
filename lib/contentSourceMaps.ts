import 'server-only';

import { draftMode } from 'next/headers';

import { encodeGraphQLResponse } from '@contentful/content-source-maps';
import { OperationResult } from 'urql';

export const isContentSourceMapsEnabled = process?.env?.CONTENTFUL_USE_CONTENT_SOURCE_MAPS === 'true';

export const addContentSourceMaps = <T extends OperationResult>(response: T): T => {
  return draftMode() && isContentSourceMapsEnabled
    ? (encodeGraphQLResponse({
        data: response.data,
        extensions: response.extensions,
      }) as T)
    : response;
};
