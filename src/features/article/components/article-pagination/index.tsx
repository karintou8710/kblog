import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'

type Props = {
  totalPage: number
  currentPage: number
  className?: string
}

export default async function ArticlePagination({ currentPage, className, totalPage }: Props) {
  return (
    <Pagination className={className}>
      <PaginationContent>
        {Array.from({ length: totalPage }).map((_, index) => {
          const page = index + 1
          return (
            <PaginationItem key={page}>
              <PaginationLink href={`/articles/page/${page}`} isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}
