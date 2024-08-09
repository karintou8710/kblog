import ArticleList from './_components/article-list'

export const dynamic = 'force-static'
export const fetchCache = 'force-cache'

export default async function Home() {
  return (
    <div className='container mx-auto my-16'>
      <ArticleList />
    </div>
  )
}
