import ArticleList from './_components/article-list'

export default async function Home() {
  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleList page={1} />
    </div>
  )
}
