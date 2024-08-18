import Article from '@/features/article/components/article'
import { getList } from '@/features/article/server/microcms'

export async function generateStaticParams() {
  const { contents } = await getList()

  const paths = contents.map((post) => {
    return {
      id: post.id,
    }
  })

  return paths
}

export default async function ArticlePage({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Article id={id} className='mx-auto my-8 md:my-16' />
    </>
  )
}
