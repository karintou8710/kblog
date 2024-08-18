import ArticleList from '@/features/article/components/article-list'
import { getListWithPagination, getTagsDetail } from '@/features/article/server/microcms'

type Props = {
  page: number
  tagId: string
}

export default async function ArticleListFilterByTag({ page, tagId }: Props) {
  const [{ contents }, tag] = await Promise.all([
    getListWithPagination(page, {
      filters: `tags[contains]${tagId}`,
    }),
    getTagsDetail(tagId),
  ])

  return (
    <div>
      <ArticleList articles={contents} title={`「${tag.name}」の記事一覧`} />
    </div>
  )
}
