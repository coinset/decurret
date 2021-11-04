import { BASE_URL, TICKER } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { takeSymbolId } from '@/shared/parse'
import { SymbolIdOrPair } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

type TickerOptions = SymbolIdOrPair

type TickerResponse = {
  symbolId: number
  bestAsk: number
  bestBid: number
  open: number
  high: number
  low: number
  last: number
  volume: number
  timestamp: Date
}

const reviver: Reviver = (key, value) => {
  if (key === 'volume' && typeof value === 'string') {
    return Number(value)
  }

  if (key === 'timestamp' && typeof value === 'number') {
    return new Date(value)
  }

  return value
}

const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = (
  { symbolId, pair },
  init
) => {
  const url = new URL(TICKER, BASE_URL)

  const id = takeSymbolId({ id: symbolId, pair })

  url.search = new URLSearchParams({
    symbolId: id
  }).toString()

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchTicker }

export type { TickerResponse, TickerOptions }
