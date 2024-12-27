import { getTagsList } from '@/features/article/server/microcms'

import ArticleListFilterByTagPage from './page/[current]/page'

type Params = Promise<{ tagId: string }>

export async function generateStaticParams() {
  const { contents: tags } = await getTagsList()

  const paths = tags.map((tag) => {
    return {
      tagId: tag.id,
    }
  })

  return paths
}

export default async function Page(props: { params: Params }) {
  const params = await props.params

  return (
    <ArticleListFilterByTagPage
      params={new Promise((resolve) => resolve({ current: '1', tagId: params.tagId }))}
    />
  )
}
