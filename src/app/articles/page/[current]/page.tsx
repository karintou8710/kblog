import { getList, PER_PAGE } from '@/features/article/server/microcms'

import PageView from './page-view'

type Params = Promise<{ current: string }>

export async function generateStaticParams() {
  const { totalCount } = await getList()

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((current) => ({
    current: String(current),
  }))

  return paths
}

export default async function Page(props: { params: Params }) {
  const params = await props.params
  const current = Number(params.current)

  return <PageView current={current} />
}
