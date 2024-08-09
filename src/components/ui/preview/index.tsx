import parse from 'html-react-parser'

type Props = {
  content: string
  className?: string
}

export default function Preview({ content, className }: Props) {
  return <div className={className}>{parse(content)}</div>
}
