import { createClient } from 'microcms-js-sdk'

import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk'

export type Tag = {
  id: string
  name: string
} & MicroCMSDate

export type Blog = {
  id: string
  title: string
  content: string
  eyecatch: MicroCMSImage
  tags: Tag[]
} & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
    customRequestInit: {
      next: {
        tags: ['articles', 'tags'],
      },
    },
  })

  return listData
}

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
    queries,
    customRequestInit: {
      next: {
        tags: [`article_${contentId}`, 'tags'],
      },
    },
  })

  return detailData
}
