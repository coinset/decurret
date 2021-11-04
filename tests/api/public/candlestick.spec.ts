import { fetchCandlestick } from '@/api/public/candlestick'

describe('fetchCandlestick', () => {
  it('should return right field data types', async () => {
    const result = await fetchCandlestick({
      pair: 'BTC_JPY',
      candlestickType: 'PT1M'
    })

    const fields = ['symbolId', 'candlesticks', 'timestamp']

    const keys = Object.keys(result)
    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

    expect(keys).toHaveLength(fields.length)

    const { symbolId, candlesticks, timestamp } = result

    expect(symbolId).toEqual(expect.any(Number))
    expect(candlesticks).toEqual(expect.any(Array))
    expect(candlesticks[0]).toEqual(expect.any(Object))

    const { open, high, low, close, volume, time } = candlesticks[0]

    expect(open).toEqual(expect.any(Number))
    expect(high).toEqual(expect.any(Number))
    expect(low).toEqual(expect.any(Number))
    expect(close).toEqual(expect.any(Number))
    expect(volume).toEqual(expect.any(Number))
    expect(time).toEqual(expect.any(Date))
    expect(timestamp).toEqual(expect.any(Date))
  })
})
