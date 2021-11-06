import { fetchTrades } from '@/api/public/trades'

describe('fetchTrades', () => {
  it('should return right field data types', async () => {
    const result = await fetchTrades({ pair: 'BTC_JPY' })
    const { symbolId, trades, timestamp } = result

    expect(symbolId).toBeNumber()
    expect(trades).toBeArray()

    trades.forEach(({ id, orderSide, price, amount, tradedAt }) => {
      expect(id).toBeNumber()
      expect(orderSide).toBeOneOf(['BUY', 'SELL'])
      expect(price).toBeNumber()
      expect(amount).toBeNumber()
      expect(tradedAt).toBeAfter(new Date('2000/1/1'))
      expect(timestamp).toBeAfter(new Date('2000/1/1'))
    })
  })
})
