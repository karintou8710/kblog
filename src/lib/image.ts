import { ImageLoaderProps } from 'next/image'

export function microCMSImageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?w=${width}&q=${quality || 75}`
}
