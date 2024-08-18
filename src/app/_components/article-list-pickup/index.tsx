import Link from 'next/link'

import { Button } from '@/components/ui/button'
import ArticleList from '@/features/article/components/article-list'
import { getLatestPickup } from '@/features/article/server/microcms'

export default async function ArticleListPickup() {
  const { contents } = await getLatestPickup()

  return (
    <div>
      <ArticleList articles={contents} />
      <div className='mt-16 text-center'>
        <Button variant='default' size='lg' asChild>
          <Link href='/articles'>全ての記事</Link>
        </Button>
      </div>
    </div>
  )
}
