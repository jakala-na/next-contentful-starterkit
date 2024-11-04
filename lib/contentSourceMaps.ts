import 'server-only';

import { encodeGraphQLResponse } from '@contentful/content-source-maps';
import { OperationResult } from 'urql';

export const isContentSourceMapsEnabled = process?.env?.CONTENTFUL_USE_CONTENT_SOURCE_MAPS === 'true';

export const addContentSourceMaps = <T extends OperationResult>(response: T): T => {
  return response?.extensions && isContentSourceMapsEnabled
    ? (encodeGraphQLResponse({
        data: response.data,
        extensions: response.extensions,
      }) as T)
    : response;
};
