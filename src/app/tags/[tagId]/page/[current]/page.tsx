import ArticlePaginationFetcher from '@/features/article/components/article-pagination/fetcher'
import {
  getList,
  getListWithPagination,
  getTagsList,
  PER_PAGE,
} from '@/features/article/server/microcms'
import { getPageNumber } from '@/lib/utils'

import ArticleListSection from './_components/article-list-section'

type Props = {
  params: { tagId: string; current: string }
}

export async function generateStaticParams() {
  const { contents: tags } = await getTagsList()

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const pathsPromise = tags.map(async (tag) => {
    const { totalCount } = await getList({
      filters: `tags[contains]${tag.id}`,
    })

    return range(1, Math.ceil(totalCount / PER_PAGE)).map((current) => ({
      tagId: tag.id,
      current: String(current),
    }))
  })

  return (await Promise.all(pathsPromise)).flat()
}

export default async function Page({ params: { tagId, current } }: Props) {
  const page = getPageNumber(Number(current))

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
