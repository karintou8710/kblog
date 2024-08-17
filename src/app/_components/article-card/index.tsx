import Image from 'next/image'
import Link from 'next/link'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkBadge } from '@/components/ui/link-badge'
import { getReadableDate } from '@/lib/date'
import { cn } from '@/lib/utils'
import { Blog } from '@/server/libs/microcms'

type Props = {
  post: Blog
  className?: string
}

export default function ArticleCard({ post, className }: Props) {
  return (
    <Card className={cn('w-[320px] sm:w-[400px]', className)}>
      <Link href={`/articles/${post.id}`} className='relative block aspect-video'>
        <Image src={post.eyecatch?.url ?? ''} alt='eyecatch' fill className='object-cover' />
      </Link>
      <CardHeader>
        <Link href={`/articles/${post.id}`}>
          <CardTitle className='hover:underline'>{post.title}</CardTitle>
        </Link>
        <CardDescription>{getReadableDate(new Date(post.publishedAt!))}</CardDescription>
        <div className='mt-6 flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <LinkBadge key={tag.id} href={`/tags/${tag.name}`}>
              {tag.name}
            </LinkBadge>
          ))}
        </div>
      </CardHeader>
    </Card>
  )
}
