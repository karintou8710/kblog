import parse from 'html-react-parser'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getReadableDate } from '@/lib/date'
import { getDetail, getList } from '@/server/libs/microcms'

export const dynamic = 'force-static'
export const fetchCache = 'force-cache'

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
  const post = await getDetail(id)

  if (!post) {
    notFound()
  }

  console.log(post.publishedAt)

  return (
    <div className='mx-auto my-16 w-[800px]'>
      <div>
        <Image
          src={post.eyecatch?.url ?? ''}
          alt='eyecatch'
          width={600}
          height={300}
          className='mx-auto'
        />
        <h1 className='mt-16 text-3xl font-bold'>{post.title}</h1>
        <p className='mt-6'>公開日: {getReadableDate(new Date(post.publishedAt!))}</p>
      </div>

      <div className='my-6 border' />

      <div className='mt-8'>{parse(post.content ?? '')}</div>
    </div>
  )
}
