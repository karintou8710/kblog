import Preview from '@/components/ui/preview'

type Props = {
  content: string
  className?: string
}

export function ArticleMain({ content, className }: Props) {
  return <Preview content={content} className={className} />
}
