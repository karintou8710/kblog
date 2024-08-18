import { ArticleSkeltonCard } from '../article-skelton-card'

type Props = {
  n: number
}

export default function ArticleListSkelton({ n }: Props) {
  return (
    <div className='mx-auto flex flex-wrap gap-x-3 gap-y-8'>
      {new Array(n).fill(0).map((_, index) => (
        <ArticleSkeltonCard key={index} />
      ))}
    </div>
  )
}
