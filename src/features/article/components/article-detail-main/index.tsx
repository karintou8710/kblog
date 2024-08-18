import MarkdownView from '@/features/article/components/markdown-view'

type Props = {
  content: string
  className?: string
}

export default function ArticleDetailMain({ content, className }: Props) {
  return <MarkdownView content={content} className={className} />
}
