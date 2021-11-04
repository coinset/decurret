import { PAIR_ID_MAP } from '@/constants/pair'
import type { DecurretPair } from '@/shared/types/currency'
import type { Reviver } from '@/shared/types/fetch'

const defineReviver = (reviver?: Reviver) => (key: string, value: unknown) => {
  if (key === 'success' && typeof value === 'number') {
    return Boolean(value)
  }

  return reviver ? reviver(key, value) : value
}

const takeSymbolId = ({
  id,
  pair
}: {
  id?: number
  pair?: DecurretPair
}): string => {
  if (typeof id === 'number') return String(id)
  if (pair === undefined) return ''

  return String(PAIR_ID_MAP[pair])
}

export { defineReviver, takeSymbolId }
