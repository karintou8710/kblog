import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPageNumber(n: number) {
  if (Number.isInteger(n) && n > 0) {
    return n
  } else {
    return 1
  }
}
