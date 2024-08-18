import ArticleList from '@/features/article/components/article-list'
import { getListWithPagination } from '@/features/article/server/microcms'

type Props = {
  page: number
  tagId: string
}

export default async function ArticleListFilterByTag({ page, tagId }: Props) {
  const { contents } = await getListWithPagination(page, {
    filters: `tags[contains]${tagId}`,
  })

  return (
    <div>
      <ArticleList articles={contents} />
    </div>
  )
}
