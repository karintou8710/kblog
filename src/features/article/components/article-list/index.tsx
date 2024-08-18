import styles from './index.module.css'
import { Blog } from '../../types/microcms'
import ArticleCard from '../article-card'

type Props = {
  articles: Blog[]
}

export default async function ArticleList({ articles }: Props) {
  if (articles.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <section className={styles.articleList}>
      <h2 className='py-4 text-2xl font-bold'>記事一覧</h2>
      {/* TODO: レスポンシブに対応したカード配置 */}
      <div className='mx-auto flex flex-wrap gap-x-3 gap-y-8'>
        {articles.map((post) => {
          return <ArticleCard key={post.id} post={post} className='shrink-0' />
        })}
      </div>
    </section>
  )
}
