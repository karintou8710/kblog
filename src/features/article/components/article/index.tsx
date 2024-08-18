import { notFound } from 'next/navigation'

import { getDetail } from '@/features/article/server/microcms'
import { cn } from '@/lib/utils'

import ArticleHeader from '../article-header'
import ArticleMain from '../article-main'

type Props = {
  id: string
  className?: string
}

export default async function Article({ id, className }: Props) {
  const post = await getDetail(id)

  if (!post) {
    notFound()
  }

  return (
    <div className={cn('px-4 md:p-0 md:w-[750px]', className)}>
      <ArticleHeader post={post} />
      <div className='my-6 border' />
      <ArticleMain content={post.content} className='mt-8' />
    </div>
  )
}
