import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import UserIcon from '@/assets/icon.jpg'
import XIcon from '@/assets/x-logo.svg'
import { Button } from '@/components/ui/button'

export default function UserProfile() {
  return (
    <div className='overflow-hidden rounded-lg bg-white p-8 shadow-lg'>
      <div className='flex items-start'>
        <div className='mr-6 shrink-0'>
          <Image
            className='size-32 rounded-full object-cover'
            src={UserIcon}
            alt='Blog author'
            width={200}
            height={200}
          />
          <div className='mt-4 text-center font-bold'>karintou</div>
          <div className='mx-auto mt-1 h-1 w-16 rounded-full bg-blue-500' />
        </div>

        <div className='mt-3'>
          <p className='mt-2'>
            このブログは日々の日常を中心に不定期更新します。食べたご飯で埋め尽くされるかもしれない。たまに技術に関するつぶやきをするかも。
          </p>
          <p className='mt-4'>趣味は模索中。最近は外食とポーカーが好き。</p>

          <div className='mt-7 flex items-center gap-x-3'>
            <Button variant='icon' size='icon' asChild className='size-6'>
              <Link href='https://github.com/karintou8710' target='_blank'>
                <GitHubLogoIcon className='size-6 text-black opacity-40 hover:opacity-100' />
              </Link>
            </Button>

            <Button variant='icon' size='icon' asChild className='size-5'>
              <Link href='https://x.com/karintou74073' target='_blank'>
                <XIcon className='size-5 text-black opacity-40 hover:opacity-100' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
