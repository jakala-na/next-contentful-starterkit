import { type ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

export interface LinkProps {
  children: ReactNode;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- allow any additional props
  [key: string]: any;
}

export function Link({ asChild = false, ...props }: LinkProps) {
  const Component = asChild ? Slot : 'a';

  return <Component {...props} />;
}
