import { fetchOrderBook } from '@/api/public/order_book'

describe('fetchOrderBook', () => {
  it('should return right field data types', async () => {
    const result = await fetchOrderBook({ pair: 'BTC_JPY' })

    const fields = [
      'symbolId',
      'asks',
      'bids',
      'bestBid',
      'bestAsk',
      'midPrice',
      'spread',
      'timestamp'
    ]

    expect(result).toContainAllKeys(fields)

    const {
      symbolId,
      asks,
      bids,
      bestBid,
      bestAsk,
      midPrice,
      spread,
      timestamp
    } = result

    expect(symbolId).toBeNumber()

    const forEachCase = (value: { price: number; amount: number }[]) => {
      expect(value).toBeArray()
      value.forEach(({ price, amount }) => {
        expect(price).toBeNumber()
        expect(amount).toBeNumber()
      })
    }

    forEachCase(asks)
    forEachCase(bids)
    expect(bestBid).toBeNumber()
    expect(bestAsk).toBeNumber()
    expect(midPrice).toBeNumber()
    expect(spread).toBeNumber()
    expect(timestamp).toBeAfter(new Date('2000/1/1'))
  })
})
