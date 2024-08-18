import { Suspense } from 'react'

import ArticleListSkelton from '@/features/article/components/article-list-skelton'
import ArticleListWrapper from '@/features/article/components/article-list-wrapper'
import { getTagsDetail } from '@/features/article/server/microcms'

import ArticleListFilterByTag from '../article-list-filter-by-tag'

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
        <ArticleListFilterByTag page={page} tagId={tagId} />
      </Suspense>
    </ArticleListWrapper>
  )
}
