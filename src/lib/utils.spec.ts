import { describe, expect, it } from 'vitest'

import { cn, getPageNumber } from './utils'

describe('cn', () => {
  it('複数のクラス名を結合できる', () => {
    expect(cn('absolute', 'flex')).toBe('absolute flex')
  })

  it('falsyな値を無視して結合できる', () => {
    expect(cn('absolute', false, null, undefined, '', 'flex')).toBe('absolute flex')
  })

  it('重複したクラス名をtailwind-mergeで最適化できる', () => {
    // eslint-disable-next-line
    expect(cn('text-sm', 'text-lg')).toBe('text-lg')
  })
})

describe('getPageNumber', () => {
  it('正の整数をそのまま返す', () => {
    expect(getPageNumber(3)).toBe(3)
    expect(getPageNumber(1)).toBe(1)
  })

  it('0以下の場合は1を返す', () => {
    expect(getPageNumber(0)).toBe(1)
    expect(getPageNumber(-5)).toBe(1)
  })

  it('整数でない値は1を返す', () => {
    expect(getPageNumber(NaN)).toBe(1)
    expect(getPageNumber(0.2)).toBe(1)
  })
})
