import ArticleDetail from '@/features/article/components/article-detail'
import { getList } from '@/features/article/server/microcms'

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

export default async function ArticlePage(props: { params: Params }) {
  const params = await props.params

  return (
    <>
      <ArticleDetail id={params.id} className='mx-auto my-8 md:my-16' />
    </>
  )
}
