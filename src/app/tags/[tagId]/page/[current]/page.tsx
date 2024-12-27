import { getList, getTagsList, PER_PAGE } from '@/features/article/server/microcms'

import PageView from './page-view'

type Params = Promise<{ tagId: string; current: string }>

export async function generateStaticParams() {
  const { contents: tags } = await getTagsList()

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const pathsPromise = tags.map(async (tag) => {
    const { totalCount } = await getList({
      filters: `tags[contains]${tag.id}`,
    })

    return range(1, Math.ceil(totalCount / PER_PAGE)).map((current) => ({
      tagId: tag.id,
      current: String(current),
    }))
  })

  return (await Promise.all(pathsPromise)).flat()
}

export default async function Page(props: { params: Params }) {
  const params = await props.params
  const current = Number(params.current)

  return <PageView tagId={params.tagId} current={current} />
}
