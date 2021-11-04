import { fetchTicker } from '@/api/public/ticker'

describe('fetchCurrencyPairs', () => {
  it('should return right field data types', async () => {
    const result = await fetchTicker({ pair: 'BTC_JPY' })

    const fields = [
      'symbolId',
      'bestAsk',
      'bestBid',
      'open',
      'high',
      'low',
      'last',
      'volume',
      'timestamp'
    ]

    const keys = Object.keys(result)
    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

    expect(keys).toHaveLength(fields.length)

    const {
      symbolId,
      bestAsk,
      bestBid,
      open,
      high,
      low,
      last,
      volume,
      timestamp
    } = result

    expect(symbolId).toEqual(expect.any(Number))
    expect(bestAsk).toEqual(expect.any(Number))
    expect(bestBid).toEqual(expect.any(Number))
    expect(open).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(last).toEqual(expect.any(Number))
    expect(volume).toEqual(expect.any(Number))
    expect(timestamp).toEqual(expect.any(Date))
  })
})
