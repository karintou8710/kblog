import Link from 'next/link'
import { Suspense } from 'react'

import { Button } from '@/components/ui/button'
import ArticleListContainer from '@/features/article/components/article-list-container'
import ArticleListSkelton from '@/features/article/components/article-list-skelton'

import ArticleListPickup from '../article-list-pickup'

export default function ArticleListSection() {
  return (
    <ArticleListContainer>
      <h2 className='py-4 text-2xl font-bold'>最新の記事</h2>
      <Suspense fallback={<ArticleListSkelton n={3} />}>
        <ArticleListPickup />
      </Suspense>
      <div className='mt-16 text-center'>
        <Button variant='default' size='lg' asChild>
          <Link href='/articles'>全ての記事</Link>
        </Button>
      </div>
    </ArticleListContainer>
  )
}
