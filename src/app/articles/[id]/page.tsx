import { getList } from '@/server/libs/microcms'

import Article from './_components/article'

export async function generateStaticParams() {
  const { contents } = await getList()

  const paths = contents.map((post) => {
    return {
      id: post.id,
    }
  })

  return [...paths]
}

export default async function ArticlePage({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <Article id={id} className='mx-auto my-8 md:my-16' />
    </>
  )
}
