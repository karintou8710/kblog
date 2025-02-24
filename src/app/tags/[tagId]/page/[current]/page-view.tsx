import ArticlePaginationFetcher from '@/features/article/components/article-pagination/fetcher'
import { getListWithPagination } from '@/features/article/server/microcms'
import { getPageNumber } from '@/lib/utils'

import ArticleListSection from './_components/article-list-section'

type Props = { tagId: string; current: number }

export default async function PageView({ tagId, current }: Props) {
  const page = getPageNumber(current)

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleListSection page={page} tagId={tagId} />
      <ArticlePaginationFetcher
        fetcher={getListWithPagination(page, {
          filters: `tags[contains]${tagId}`,
        })}
        currentPage={page}
        href={`/tags/${tagId}/`}
        className='mt-16'
      />
    </div>
  )
}
