import { z } from 'zod'

export const articleRevalidateSchema = z.object({
  id: z.string(),
})

export type ArticleRevalidateSchema = z.infer<typeof articleRevalidateSchema>
