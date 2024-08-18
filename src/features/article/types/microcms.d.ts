import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

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
