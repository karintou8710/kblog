import ArticleList from '@/features/article/components/article-list'
import { getLatestPickup } from '@/features/article/server/microcms'

export default async function ArticleListPickup() {
  const { contents } = await getLatestPickup()

  return <ArticleList articles={contents} />
}
