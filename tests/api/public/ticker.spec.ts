import { fetchTicker } from '@/api/public/ticker'

describe('fetchTicker', () => {
  it('should return right field data types', async () => {
    const result = await fetchTicker({ pair: 'BTC_JPY' })

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

    expect(symbolId).toBeNumber()
    expect(bestAsk).toBeNumber()
    expect(bestBid).toBeNumber()
    expect(open).toBeNumber()
    expect(high).toBeNumber()
    expect(low).toBeNumber()
    expect(last).toBeNumber()
    expect(volume).toBeNumber()
    expect(timestamp).toBeAfter(new Date('2000/1/1'))
  })
})
