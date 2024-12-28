import ArticleDetail from '@/features/article/components/article-detail'

type Props = {
  id: string
}

export default async function PageView({ id }: Props) {
  return (
    <>
      <ArticleDetail id={id} className='mx-auto my-8 md:my-16' />
    </>
  )
}
