import Image from 'next/image'
import { notFound } from 'next/navigation'

import { LinkBadge } from '@/components/ui/link-badge'
import Preview from '@/components/ui/preview'
import { getReadableDate } from '@/lib/date'
import { getDetail, getList } from '@/server/libs/microcms'

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

  return (
    <div className='mx-auto my-8 px-4 md:my-16 md:w-[750px] md:p-0'>
      <div>
        <div className='relative mx-auto aspect-video w-full'>
          <Image src={post.eyecatch?.url ?? ''} alt='eyecatch' fill className='object-cover' />
        </div>
        <h1 className='mt-8 text-3xl font-bold md:mt-16'>{post.title}</h1>
        <p className='mt-6'>公開日: {getReadableDate(new Date(post.publishedAt!))}</p>
        <div className='mt-6 flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <LinkBadge key={tag.id} href={`/tags/${tag.name}`}>
              {tag.name}
            </LinkBadge>
          ))}
        </div>
      </div>

      <div className='my-6 border' />

      <Preview content={post.content ?? ''} className='mt-8' />
    </div>
  )
}
