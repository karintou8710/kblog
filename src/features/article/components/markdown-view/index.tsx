import parse from 'html-react-parser'

import { cn } from '@/lib/utils'

type Props = {
  content: string
  className?: string
}

export default function MarkdownView({ content, className }: Props) {
  return <div className={cn('leading-7', className)}>{parse(content)}</div>
}
