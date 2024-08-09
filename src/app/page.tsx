import ArticleList from './_components/article-list'

export const dynamic = 'force-static'
export const fetchCache = 'force-cache'

export default async function Home() {
  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleList />
    </div>
  )
}
