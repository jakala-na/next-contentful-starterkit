import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type OmitCustom<T, K> = Pick<T, Exclude<keyof T, K>>;
export type OmitDistributive<T, K> = T extends any ? (T extends object ? Id<OmitRecursive<T, K>> : T) : never;

export type Id<T> = Record<string, never> & { [P in keyof T]: T[P] };
export type OmitRecursive<T, K> = OmitCustom<{ [P in keyof T]: OmitDistributive<T[P], K> }, K>;

// eslint-disable-next-line arrow-parens
export const tryget = <T>(exp: () => T, d: T | undefined | null = undefined) => {
  try {
    const val = exp();
    if (val != null) {
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

  const lastToken = tokens.pop();

  return `${tokens.join(' ')}\u00A0${lastToken}`;
};
