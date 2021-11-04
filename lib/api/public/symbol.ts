import { BASE_URL, SYMBOL } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { SimplePublicAPI } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type SymbolOptions = {}

type SymbolResponse = {
  id: number
  tradeType: 'SPOT'
  currencyPair: string
  startAt: null
  endAt: null
  baseCurrency: string
  quoteCurrency: string
  basePrecision: number
  quotePrecision: number
  makerTradeFeePercent: number
  takerTradeFeePercent: number
  tradable: boolean
  enabled: boolean
}[]

const fetchSymbol: SimplePublicAPI<SymbolOptions, SymbolResponse> = (
  _,
  init
) => {
  const url = new URL(SYMBOL, BASE_URL)

  return jsonFetch(url, init)
}

export { fetchSymbol }

export type { SymbolResponse, SymbolOptions }
