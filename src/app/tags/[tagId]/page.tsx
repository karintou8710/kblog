import { redirect } from 'next/navigation'

type Props = {
  params: { tagId: string }
}

export default function Page({ params: { tagId } }: Props) {
  redirect(`/tags/${tagId}/page/1`)
}
