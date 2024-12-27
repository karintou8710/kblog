import { redirect } from 'next/navigation'

type Params = Promise<{ tagId: string }>

export default async function Page(props: { params: Params }) {
  const params = await props.params

  redirect(`/tags/${params.tagId}/page/1`)
}
