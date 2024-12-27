import { getList } from '@/features/article/server/microcms'

import PageView from './page-view'

type Params = Promise<{ id: string }>

export async function generateStaticParams() {
  const { contents } = await getList()

  const paths = contents.map((post) => {
    return {
      id: post.id,
    }
  })

  return paths
}

export default async function Page(props: { params: Params }) {
  const params = await props.params

  return <PageView id={params.id} />
}
