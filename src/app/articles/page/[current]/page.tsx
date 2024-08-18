import ArticlePagination from '@/features/article/components/article-pagination'
import { getList, PER_PAGE } from '@/features/article/server/microcms'
import { getPageNumber } from '@/lib/utils'

import ArticleListSection from '../../_components/article-list-section'

type Props = {
  params: { current: string }
}

export async function generateStaticParams() {
  const { totalCount } = await getList()

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((current) => ({
    current: String(current),
  }))

  return paths
}

export default function Page({ params: { current } }: Props) {
  const page = getPageNumber(Number(current))

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleListSection page={page} />
      <ArticlePagination currentPage={page} className='mt-16' />
    </div>
  )
}
