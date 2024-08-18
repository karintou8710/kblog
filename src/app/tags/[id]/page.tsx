import { getPageNumber } from '@/lib/utils'

import ArticleListSection from './_components/article-list-section'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params: { id }, searchParams }: Props) {
  const page = getPageNumber(Number(searchParams.page))

  return (
    <div className='mx-auto my-8 max-w-[1220px] sm:my-16'>
      <ArticleListSection page={page} tagId={id} />
    </div>
  )
}
