import { Slot } from '@radix-ui/react-slot';

export interface ImageProps {
  src: string;
  alt: string;
  asChild?: boolean;
  [key: string]: any;
}

export const Image = ({ asChild = false, ...props }: ImageProps) => {
  const Component = asChild ? Slot : 'img';

  return <Component {...props} />;
};
