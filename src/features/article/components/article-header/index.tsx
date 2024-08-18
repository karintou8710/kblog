import Image from 'next/image'

import { LinkBadge } from '@/components/ui/link-badge'
import { getReadableDate } from '@/lib/date'

import type { Blog } from '../../types/microcms'

type Props = {
  post: Blog
  className?: string
}

export default function ArticleHeader({ post, className }: Props) {
  return (
    <div className={className}>
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
  )
}
