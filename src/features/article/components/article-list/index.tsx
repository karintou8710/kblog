import styles from './index.module.css'
import { Blog } from '../../types/microcms'
import ArticleCard from '../article-card'

type Props = {
  articles: Blog[]
  title: string
}

export default async function ArticleList({ articles, title }: Props) {
  if (articles.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <section className={styles.articleList}>
      <h2 className='py-4 text-2xl font-bold'>{title}</h2>
      <div className='mx-auto flex flex-wrap gap-x-3 gap-y-8'>
        {articles.map((post) => {
          return <ArticleCard key={post.id} post={post} className='shrink-0' />
        })}
      </div>
    </section>
  )
}
