import { getTagsList } from '@/features/article/server/microcms'

import ArticleListFilterByTagPage from './page//[current]/page'

type Props = {
  params: { tagId: string }
}

export async function generateStaticParams() {
  const { contents: tags } = await getTagsList()

  const paths = tags.map((tag) => {
    return {
      tagId: tag.id,
    }
  })

  return paths
}

export default function Page({ params: { tagId } }: Props) {
  return <ArticleListFilterByTagPage params={{ current: '1', tagId: tagId }} />
}
