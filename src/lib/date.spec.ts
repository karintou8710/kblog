import { describe, expect, it } from 'vitest'

import { getReadableDate, isInvalidDate } from './date'

describe('isInvalidDate', () => {
  it('有効な日付の場合はfalseを返す', () => {
    const date = new Date('2024-06-01')
    expect(isInvalidDate(date)).toBe(false)
  })

  it('無効な日付の場合はtrueを返す', () => {
    const invalidDate = new Date('invalid-date')
    expect(isInvalidDate(invalidDate)).toBe(true)
  })
})

describe('getReadableDate', () => {
  it('2桁の月と日を正しくフォーマットする', () => {
    const date = new Date('2024-12-20')
    expect(getReadableDate(date)).toBe('2024/12/20')
  })

  it('1桁の月と日を正しくフォーマットする', () => {
    const date = new Date('2024-01-05')
    expect(getReadableDate(date)).toBe('2024/01/05')
  })

  it('無効な日付を渡した場合にエラーを投げる', () => {
    const invalidDate = new Date('invalid-date')
    expect(() => getReadableDate(invalidDate)).toThrow()
  })
})
