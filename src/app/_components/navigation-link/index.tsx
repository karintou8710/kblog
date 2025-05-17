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
        'relative block p-1 font-bold hover:opacity-80',
        isSamePath &&
          'after:absolute after:-bottom-0.5 after:left-0 after:w-full after:border-2 after:border-orange-500 after:content-[""]',
      )}
    >
      {label}
    </Link>
  )
}
