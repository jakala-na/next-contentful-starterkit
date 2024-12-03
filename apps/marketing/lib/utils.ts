type OmitCustom<T, K> = Pick<T, Exclude<keyof T, K>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: Borrowed from Contentful starters this way. Look into later.
export type OmitDistributive<T, K> = T extends any ? (T extends object ? Id<OmitRecursive<T, K>> : T) : never;

export type Id<T> = Record<string, never> & { [P in keyof T]: T[P] };
export type OmitRecursive<T, K> = OmitCustom<{ [P in keyof T]: OmitDistributive<T[P], K> }, K>;

export const tryget = <T>(exp: () => T, d: T | undefined | null = undefined) => {
  try {
    const val = exp();
    if (val !== null) {
      return val;
    }
  } catch {
    /* noop */
  }
  return d;
};

export const optimizeLineBreak = (str: string): string => {
  const tokens = str.split(' ');

  if (tokens.length < 3) {
    return str;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- array length is checked above.
  const lastToken = tokens.pop()!;

  return `${tokens.join(' ')}\u00A0${lastToken}`;
};
