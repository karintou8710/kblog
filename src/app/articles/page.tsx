import ArticleListPage from './page/[current]/page'

export default function Page() {
  return <ArticleListPage params={new Promise((resolve) => resolve({ current: '1' }))} />
}
