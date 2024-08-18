import ArticlePagination from '@/features/article/components/article-pagination'
import { getPageNumber } from '@/lib/utils'

import ArticleListSection from './_components/article-list-section'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ searchParams }: Props) {
  const page = getPageNumber(Number(searchParams.page))

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleListSection page={page} />
      <ArticlePagination currentPage={page} className='mt-16' />
    </div>
  )
}
