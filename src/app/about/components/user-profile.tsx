import Image from 'next/image'

import UserIcon from '@/assets/icon.jpg'

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
        <div className='mt-3 text-gray-600'>
          <p className='mt-2'>
            このブログは日々の日常を中心に不定期更新します。食べたご飯で埋め尽くされるかもしれない。たまに技術に関するつぶやきをするかも。
          </p>
          <p className='mt-4'>趣味は模索中。最近は外食とポーカーが好き</p>
        </div>
      </div>
    </div>
  )
}
