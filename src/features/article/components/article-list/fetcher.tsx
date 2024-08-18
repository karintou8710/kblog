import ArticleList from '@/features/article/components/article-list'

import { Blog } from '../../types/microcms'

import type { MicroCMSListResponse } from 'microcms-js-sdk'

type Props = {
  fetcher: Promise<MicroCMSListResponse<Blog>>
}

export default async function ArticleListFetcher({ fetcher }: Props) {
  const { contents } = await fetcher

  return <ArticleList articles={contents} />
}
