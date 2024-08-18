import Link from 'next/link'
import { Suspense } from 'react'

import { Button } from '@/components/ui/button'
import ArticleListFetcher from '@/features/article/components/article-list/fetcher'
import ArticleListSkelton from '@/features/article/components/article-list-skelton'
import ArticleListWrapper from '@/features/article/components/article-list-wrapper'
import { getLatestPickup } from '@/features/article/server/microcms'

export default function ArticleListSection() {
  return (
    <ArticleListWrapper>
      <h2 className='py-4 text-2xl font-bold'>最新の記事</h2>
      <Suspense fallback={<ArticleListSkelton n={3} />}>
        <ArticleListFetcher fetcher={getLatestPickup()} />
      </Suspense>
      <div className='mt-16 text-center'>
        <Button variant='default' size='lg' asChild>
          <Link href='/articles'>全ての記事</Link>
        </Button>
      </div>
    </ArticleListWrapper>
  )
}
