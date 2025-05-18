export const isInvalidDate = (date: Date) => Number.isNaN(date.getTime())

export function getReadableDate(date: Date) {
  if (isInvalidDate(date)) {
    throw new Error('invalid date')
  }

  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}/${month}/${day}`
}
