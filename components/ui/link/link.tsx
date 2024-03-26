import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface LinkProps {
  children: ReactNode
  href: string
  [key: string]: any
}

export const Link = ({ asChild = false, ...props }: LinkProps) => {
  const Component = asChild ? Slot : 'a'

  return <Component {...props} />
}
