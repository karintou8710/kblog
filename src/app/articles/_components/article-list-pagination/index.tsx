import ArticleList from '@/features/article/components/article-list'
import { getListWithPagination } from '@/features/article/server/microcms'

type Props = {
  page: number
}

export default async function ArticleListPagination({ page }: Props) {
  const { contents } = await getListWithPagination(page)

  return <ArticleList articles={contents} title='記事一覧' />
}
