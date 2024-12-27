'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type Props = {
  href: string
  label: string
  className?: string
}

export default function NavigationLink({ href, label, className }: Props) {
  const pathname = usePathname()
  const isSamePath = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'block py-1 px-1 hover:opacity-80 font-bold',
        isSamePath && 'border-b-4 border-orange-500',
      )}
    >
      {label}
    </Link>
  )
}
