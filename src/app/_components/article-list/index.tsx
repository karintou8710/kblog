import { getList } from '@/server/libs/microcms'

import ArticleCard from '../article-card'

export default async function ArticleList() {
  const { contents } = await getList()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <section>
      <h2 className='py-4 text-2xl font-bold'>記事一覧</h2>
      {/* TODO: レスポンシブに対応したカード配置 */}
      <div className='flex flex-wrap gap-x-[calc((100%-1200px)/3)] gap-y-8'>
        {contents.map((post) => {
          return <ArticleCard key={post.id} post={post} className='shrink-0' />
        })}
      </div>
    </section>
  )
}
