import { Skeleton } from '@/components/ui/skeleton'

export function ArticleSkeltonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[250px] w-[320px] rounded-lg sm:w-[400px]' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}
