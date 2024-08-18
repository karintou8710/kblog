import { Suspense } from 'react'

import ArticleListContainer from '@/features/article/components/article-list-container'
import ArticleListSkelton from '@/features/article/components/article-list-skelton'

import ArticleListFilterByPagination from '../article-list-filter-by-pagination'

type Props = {
  page: number
}

export default function ArticleListSection({ page }: Props) {
  return (
    <ArticleListContainer>
      <h2 className='py-4 text-2xl font-bold'>記事一覧</h2>
      <Suspense fallback={<ArticleListSkelton n={3} />}>
        <ArticleListFilterByPagination page={page} />
      </Suspense>
    </ArticleListContainer>
  )
}
