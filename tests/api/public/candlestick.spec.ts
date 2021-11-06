import { fetchCandlestick } from '@/api/public/candlestick'

describe('fetchCandlestick', () => {
  it('should return right field data types', async () => {
    const result = await fetchCandlestick({
      pair: 'BTC_JPY',
      candlestickType: 'PT1M'
    })

    const fields = ['symbolId', 'candlesticks', 'timestamp']

    expect(result).toContainAllKeys(fields)

    const { symbolId, candlesticks, timestamp } = result

    expect(symbolId).toBeNumber()
    expect(candlesticks).toBeArray()
    expect(timestamp).toBeAfter(new Date('2000/1/1'))

    candlesticks.forEach(({ open, high, low, close, volume, time }) => {
      expect(open).toBeNumber()
      expect(high).toBeNumber()
      expect(low).toBeNumber()
      expect(close).toBeNumber()
      expect(volume).toBeNumber()
      expect(time).toBeAfter(new Date('2000/1/1'))
    })
  })
})
