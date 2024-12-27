import ArticlePaginationFetcher from '@/features/article/components/article-pagination/fetcher'
import { getListWithPagination } from '@/features/article/server/microcms'
import { getPageNumber } from '@/lib/utils'

import ArticleListSection from './_components/article-list-section'

type Props = {
  current: number
}

export default async function PageView({ current }: Props) {
  const page = getPageNumber(current)

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleListSection page={page} />
      <ArticlePaginationFetcher
        fetcher={getListWithPagination(page)}
        currentPage={page}
        href='/articles/'
        className='mt-16'
      />
    </div>
  )
}
