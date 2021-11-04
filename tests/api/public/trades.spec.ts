import { fetchTrades } from '@/api/public/trades'

describe('fetchTrades', () => {
  it('should return right field data types', async () => {
    const result = await fetchTrades({ pair: 'BTC_JPY' })

    const fields = ['symbolId', 'trades', 'timestamp']

    const keys = Object.keys(result)
    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

    expect(keys).toHaveLength(fields.length)
    const { symbolId, trades, timestamp } = result

    expect(symbolId).toEqual(expect.any(Number))
    expect(trades).toEqual(expect.any(Array))
    expect(trades[0]).toEqual(expect.any(Object))
    const { id, orderSide, price, amount, tradedAt } = trades[0]
    expect(id).toEqual(expect.any(Number))
    expect(orderSide).toMatch(/BUY|SELL/)
    expect(price).toEqual(expect.any(Number))
    expect(amount).toEqual(expect.any(Number))
    expect(tradedAt).toEqual(expect.any(Date))
    expect(timestamp).toEqual(expect.any(Date))
  })
})
