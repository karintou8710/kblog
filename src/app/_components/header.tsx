import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='flex h-14 shrink-0 items-center bg-gray-700 px-6 text-white'>
      <Link className='text-xl font-bold' href='/'>
        <span>karintouのブログ</span>
      </Link>
      <div className='flex-1' />
      <nav>
        <Button variant='icon' size='icon' asChild>
          <Link href='https://github.com/karintou8710' target='_blank'>
            <GitHubLogoIcon className='size-6' />
          </Link>
        </Button>
      </nav>
    </header>
  )
}
