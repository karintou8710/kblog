import MarkdownView from '@/features/article/components/markdown-view'

type Props = {
  content: string
  className?: string
}

export default function ArticleMain({ content, className }: Props) {
  return <MarkdownView content={content} className={className} />
}
