import { createClient } from 'microcms-js-sdk'

import { Blog, Tag } from '../types/microcms'

import type { MicroCMSQueries } from 'microcms-js-sdk'

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

export const getLatestPickup = async () => {
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: {
      limit: 3,
    },
    customRequestInit: {
      next: {
        tags: ['articles', 'tags'],
      },
    },
  })

  return listData
}

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

export const getListWithPagination = async (page: number, queries?: MicroCMSQueries) => {
  const limit = 9
  const listData = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: { ...queries, offset: (page - 1) * limit, limit: limit },
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

export const getTagsDetail = async (tagId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Tag>({
    endpoint: 'tags',
    contentId: tagId,
    queries,
    customRequestInit: {
      next: {
        tags: [`tag_${tagId}`, 'tags'],
      },
    },
  })

  return detailData
}
