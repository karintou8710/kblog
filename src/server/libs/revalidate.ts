import { revalidateTag } from 'next/cache'

export function revalidateArticle(id: string) {
  revalidateTag('articles')
  revalidateTag(`article_${id}`)
}

export function revalidateTags() {
  revalidateTag('tags')
}
