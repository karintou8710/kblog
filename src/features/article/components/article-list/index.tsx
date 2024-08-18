import { Blog } from '../../types/microcms'
import ArticleCard from '../article-card'

type Props = {
  articles: Blog[]
}

export default async function ArticleList({ articles }: Props) {
  return (
    <div className='mx-auto flex flex-wrap gap-x-3 gap-y-8'>
      {articles.map((post) => {
        return <ArticleCard key={post.id} post={post} className='shrink-0' />
      })}
    </div>
  )
}
