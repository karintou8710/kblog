import { Suspense } from 'react'

import ArticleListFetcher from '@/features/article/components/article-list/fetcher'
import ArticleListSkelton from '@/features/article/components/article-list-skelton'
import ArticleListWrapper from '@/features/article/components/article-list-wrapper'
import { getListWithPagination } from '@/features/article/server/microcms'

type Props = {
  page: number
}

export default function ArticleListSection({ page }: Props) {
  return (
    <ArticleListWrapper>
      <h2 className='py-4 text-2xl font-bold'>記事一覧</h2>
      <Suspense fallback={<ArticleListSkelton n={3} />}>
        <ArticleListFetcher fetcher={getListWithPagination(page)} />
      </Suspense>
    </ArticleListWrapper>
  )
}
