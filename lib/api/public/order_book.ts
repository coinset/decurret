import { BASE_URL, ORDER_BOOK } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { takeSymbolId } from '@/shared/parse'
import { SymbolIdOrPair } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

type OrderBookOptions = SymbolIdOrPair

type OrderBookResponse = {
  symbolId: number
  asks: {
    price: number
    amount: number
  }[]
  bids: {
    price: number
    amount: number
  }[]
  timestamp: Date
  bestBid: number
  bestAsk: number
  midPrice: number
  spread: number
}

const reviver: Reviver = (key, value) => {
  if (key === 'timestamp' && typeof value === 'number') {
    return new Date(value)
  }

  return value
}

const fetchOrderBook: PublicAPI<OrderBookOptions, OrderBookResponse> = (
  { symbolId, pair },
  init
) => {
  const url = new URL(ORDER_BOOK, BASE_URL)

  const id = takeSymbolId({ id: symbolId, pair })

  url.search = new URLSearchParams({
    symbolId: id
  }).toString()

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchOrderBook }

export type { OrderBookResponse, OrderBookOptions }
