import PageView from './page/[current]/page-view'

// TODO: ページ同士の依存関係を防ぎたい
export default function Page() {
  return <PageView current={1} />
}
