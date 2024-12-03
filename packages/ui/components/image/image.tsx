import { Slot } from '@radix-ui/react-slot';

export interface ImageProps {
  src: string;
  alt: string;
  asChild?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- allow any additional props
  [key: string]: any;
}

export function Image({ asChild = false, ...props }: ImageProps) {
  const Component = asChild ? Slot : 'img';

  return <Component {...props} />;
}
