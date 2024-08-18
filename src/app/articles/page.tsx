import ArticleList from '@/features/article/components/article-list'
import ArticlePagination from '@/features/article/components/article-pagination'
import { getPageNumber } from '@/lib/utils'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ArticleListPage({ searchParams }: Props) {
  const page = getPageNumber(Number(searchParams.page))

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleList page={page} />
      <ArticlePagination currentPage={page} className='mt-16' />
    </div>
  )
}
