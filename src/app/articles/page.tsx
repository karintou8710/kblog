import { getPageNumber } from '@/lib/utils'

import ArticleList from '../_components/article-list'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ArticleListPage({ searchParams }: Props) {
  const page = getPageNumber(Number(searchParams.page))

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleList page={page} />
    </div>
  )
}
