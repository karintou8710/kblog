import { Suspense } from 'react'

import ArticleListFetcher from '@/features/article/components/article-list/fetcher'
import ArticleListSkelton from '@/features/article/components/article-list-skelton'
import ArticleListWrapper from '@/features/article/components/article-list-wrapper'
import { getListWithPagination, getTagsDetail } from '@/features/article/server/microcms'

type Props = {
  page: number
  tagId: string
}

export default async function ArticleListSection({ page, tagId }: Props) {
  const tag = await getTagsDetail(tagId)

  return (
    <ArticleListWrapper>
      <h2 className='py-4 text-2xl font-bold'>{`「${tag.name}」の記事一覧`}</h2>
      <Suspense fallback={<ArticleListSkelton n={3} />}>
        <ArticleListFetcher
          fetcher={getListWithPagination(page, {
            filters: `tags[contains]${tagId}`,
          })}
        />
      </Suspense>
    </ArticleListWrapper>
  )
}
