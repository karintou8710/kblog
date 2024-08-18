import parse from 'html-react-parser'

type Props = {
  content: string
  className?: string
}

export default function MarkdownView({ content, className }: Props) {
  return <div className={className}>{parse(content)}</div>
}
