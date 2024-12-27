import { PER_PAGE } from '../../server/microcms'
import { Blog } from '../../types/microcms'

import type { MicroCMSListResponse } from 'microcms-js-sdk'

import ArticlePagination from '.'

type Props = {
  currentPage: number
  fetcher: Promise<MicroCMSListResponse<Blog>>
  href: string
  className?: string
}

export default async function ArticlePaginationFetcher({
  fetcher,
  currentPage,
  href,
  className,
}: Props) {
  const { totalCount } = await fetcher
  const totalPage = Math.ceil(totalCount / PER_PAGE)

  return (
    <ArticlePagination
      totalPage={totalPage}
      currentPage={currentPage}
      className={className}
      href={href}
    />
  )
}
