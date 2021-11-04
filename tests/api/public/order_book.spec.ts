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

    const keys = Object.keys(result)
    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

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

    expect(symbolId).toEqual(expect.any(Number))
    expect(asks).toEqual(expect.any(Array))
    expect(asks[0]).toEqual(expect.any(Object))
    expect(asks[0].price).toEqual(expect.any(Number))
    expect(asks[0].amount).toEqual(expect.any(Number))
    expect(bids).toEqual(expect.any(Array))
    expect(bids[0]).toEqual(expect.any(Object))
    expect(bids[0].price).toEqual(expect.any(Number))
    expect(bids[0].amount).toEqual(expect.any(Number))
    expect(bestBid).toEqual(expect.any(Number))
    expect(bestAsk).toEqual(expect.any(Number))
    expect(midPrice).toEqual(expect.any(Number))
    expect(spread).toEqual(expect.any(Number))
    expect(timestamp).toEqual(expect.any(Date))
  })
})
