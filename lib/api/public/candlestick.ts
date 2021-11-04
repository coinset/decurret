import { BASE_URL, CANDLESTICK } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import { takeSymbolId } from '@/shared/parse'
import { SymbolIdOrPair } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

type CandlestickOptions = SymbolIdOrPair & {
  candlestickType: 'PT1M' | 'PT1H' | 'P1D' | 'P1W' | 'P1M'
  dateFrom?: number
  dateTo?: number
}

type CandlestickResponse = {
  symbolId: number
  candlesticks: {
    open: number
    high: number
    low: number
    close: number
    volume: number
    time: Date
  }[]
  timestamp: Date
}

const reviver: Reviver = (key, value) => {
  if (['timestamp', 'time'].includes(key) && typeof value === 'number') {
    return new Date(value)
  }

  return value
}

const fetchCandlestick: PublicAPI<CandlestickOptions, CandlestickResponse> = (
  { symbolId, pair, candlestickType, dateFrom, dateTo },
  init
) => {
  const url = new URL(CANDLESTICK, BASE_URL)

  const id = takeSymbolId({ id: symbolId, pair })

  url.search = new URLSearchParams({
    symbolId: id,
    candlestickType,
    dateFrom: typeof dateFrom === 'undefined' ? '' : String(dateFrom),
    dateTo: typeof dateTo === 'undefined' ? '' : String(dateTo)
  }).toString()

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchCandlestick }

export type { CandlestickResponse, CandlestickOptions }
