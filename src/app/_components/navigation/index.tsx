import { cn } from '@/lib/utils'

import NavigationLink from '../navigation-link'

type Props = {
  className?: string
}

export default function Navigation({ className }: Props) {
  return (
    <nav className={cn('flex gap-4', className)}>
      <NavigationLink href='/articles' label='Blog' />
      <NavigationLink href='/about' label='About' />
    </nav>
  )
}
