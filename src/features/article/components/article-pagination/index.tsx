import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'

import { getListWithPagination } from '../..//api/microcms'

type Props = {
  currentPage: number
  className?: string
}

export default async function ArticlePagination({ currentPage, className }: Props) {
  const { totalCount, limit } = await getListWithPagination(currentPage)
  const totalPage = Math.ceil(totalCount / limit)

  return (
    <Pagination className={className}>
      <PaginationContent>
        {new Array(totalPage).fill(0).map((_, index) => {
          const page = index + 1
          return (
            <PaginationItem key={page}>
              <PaginationLink href={`/articles?page=${page}`} isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}
