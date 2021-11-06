import { fetchSymbol } from '@/api/public/symbol'

describe('fetchSymbol', () => {
  it('should return right field data types', async () => {
    const result = await fetchSymbol()

    expect(result).toBeArray()

    result.forEach(
      ({
        id,
        tradeType,
        currencyPair,
        startAt,
        endAt,
        baseCurrency,
        quoteCurrency,
        basePrecision,
        quotePrecision,
        makerTradeFeePercent,
        takerTradeFeePercent,
        tradable,
        enabled
      }) => {
        expect(id).toBeNumber()
        expect(tradeType).toBe('SPOT')
        expect(currencyPair).toBeString()
        expect(startAt).toBeNull()
        expect(endAt).toBeNull()
        expect(baseCurrency).toBeString()
        expect(quoteCurrency).toBeString()
        expect(basePrecision).toBeNumber()
        expect(quotePrecision).toBeNumber()
        expect(makerTradeFeePercent).toBeNumber()
        expect(takerTradeFeePercent).toBeNumber()
        expect(tradable).toBeBoolean()
        expect(enabled).toBeBoolean()
      }
    )
  })
})
