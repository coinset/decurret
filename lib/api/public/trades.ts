import { BASE_URL, TRADES } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { takeSymbolId } from '@/shared/parse'
import { SymbolIdOrPair } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

type TradesOptions = SymbolIdOrPair

type TradesResponse = {
  symbolId: number
  trades: {
    id: number
    orderSide: 'BUY' | 'SELL'
    price: number
    amount: number
    tradedAt: Date
  }[]
  timestamp: Date
}

const reviver: Reviver = (key, value) => {
  if (['timestamp', 'tradedAt'].includes(key) && typeof value === 'number') {
    return new Date(value)
  }

  return value
}

const fetchTrades: PublicAPI<TradesOptions, TradesResponse> = (
  { symbolId, pair },
  init
) => {
  const url = new URL(TRADES, BASE_URL)

  const id = takeSymbolId({ id: symbolId, pair })

  url.search = new URLSearchParams({
    symbolId: id
  }).toString()

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTrades }

export type { TradesResponse, TradesOptions }
