import { getListWithPagination } from '@/server/libs/microcms'

import styles from './index.module.css'
import ArticleCard from '../article-card'

type Props = {
  page: number
}

export default async function ArticleList({ page }: Props) {
  const { contents } = await getListWithPagination(page)

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <section className={styles.articleList}>
      <h2 className='py-4 text-2xl font-bold'>記事一覧</h2>
      {/* TODO: レスポンシブに対応したカード配置 */}
      <div className='mx-auto flex flex-wrap gap-x-3 gap-y-8'>
        {contents.map((post) => {
          return <ArticleCard key={post.id} post={post} className='shrink-0' />
        })}
      </div>
    </section>
  )
}
