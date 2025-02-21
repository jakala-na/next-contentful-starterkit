import { Exchange } from '@urql/core';
import { pipe, map } from 'wonka';
import { type ConceptProps } from 'contentful-management';

/** Input parameters for the {@link persistedExchange}. */
export interface ModifyResponseExchangeOptions {
  locale?: string;
  taxonomyConcepts?: ConceptProps[];
}

export const modifyResponseExchange =
  (options?: ModifyResponseExchangeOptions): Exchange =>
  ({ forward }) => {
    if (!options) {
      options = {};
    }
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

    // Function to recursively find and modify TopicProduct objects
    const modifyConcepts = (obj: any): any => {
      if (typeof obj !== 'object' || obj === null) {
        return obj;
      }

      // If the result contains concepts, apply our modifications.
      if (obj.contentfulMetadata?.concepts) {
        const resultConcepts = obj.contentfulMetadata?.concepts.map((concept: { id: string }) => {
          return {
            id: concept.id,
            prefLabel: conceptMap.get(concept.id),
          };
        });

        obj.contentfulMetadata.concepts = resultConcepts;
      }

      // Recursively process arrays and objects
      return Array.isArray(obj)
        ? obj.map(modifyConcepts)
        : Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, modifyConcepts(value)]));
    };

    return (operations$) =>
      pipe(
        forward(operations$),
        map((result) => {
          if (result.data && taxonomyConcepts) {
            return {
              ...result,
              data: modifyConcepts(result.data),
            };
          }

          return result;
        })
      );
  };
