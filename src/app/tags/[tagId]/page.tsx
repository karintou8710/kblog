import { getTagsList } from '@/features/article/server/microcms'

import PageView from './page/[current]/page-view'

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

// TODO: ページ同士の依存関係を防ぎたい
export default async function Page(props: { params: Params }) {
  const params = await props.params

  return <PageView tagId={params.tagId} current={1} />
}
