import type { Exchange } from '@urql/core';
import { pipe, map } from 'wonka';
import type { ConceptProps } from 'contentful-management';

/** Input parameters for the {@link persistedExchange}. */
export interface ModifyResponseExchangeOptions {
  locale?: string;
  taxonomyConcepts?: ConceptProps[];
}

export const modifyResponseExchange =
  (options: ModifyResponseExchangeOptions = {}): Exchange =>
  ({ forward }) => {
    // Fallback locale, in case `options` does not specify one, or when a
    // concept.prefLabel does not include the specified locale.
    const defaultLocale = 'en-US';
    const { locale: localeOrDefault = defaultLocale, taxonomyConcepts } = options;

    // Map concept ID to concept label, considering locale.
    const conceptMap = new Map<string, string>();
    taxonomyConcepts?.forEach((concept) => {
      conceptMap.set(
        concept.sys.id,
        concept.prefLabel[localeOrDefault] ?? concept.prefLabel[defaultLocale] ?? '<missing label>'
      );
    });

    // Function to recursively find and modify concepts objects
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Unpredictable node types as result is parsed by modifyConcepts().
    const modifyConcepts = (obj: any): any => {
      if (typeof obj !== 'object' || obj === null) {
        return obj;
      }

      // If the result is a taxonomy concept, apply our modifications.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Type narrowing of 'any' type to object is not possible. */
      if (obj.__typename === 'TaxonomyConcept') {
        return {
          ...obj,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Type narrowing of 'any' type to object is not possible. */
          prefLabel: conceptMap.get(obj.id as string),
        };
      }

      // Recursively process arrays and objects
      return Array.isArray(obj)
        ? obj.map(modifyConcepts)
        : // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- Unpredictable object key/value types. */
          Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, modifyConcepts(value)]));
    };

    return (operations$) =>
      pipe(
        // First, forward to the next operation in the pipeline.
        forward(operations$),
        // Now we can handle the results returned from the rest of the pipeline.
        map((result) => {
          if (result.data && taxonomyConcepts) {
            /* eslint-disable @typescript-eslint/no-unsafe-assignment -- Unpredictable node types as result is parsed by modifyConcepts(). */
            return {
              ...result,
              data: modifyConcepts(result.data),
            };
          }

          return result;
        })
      );
  };
