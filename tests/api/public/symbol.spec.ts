import { fetchSymbol } from '@/api/public/symbol'

describe('fetchCurrencyPairs', () => {
  it('should return right field data types', async () => {
    const result = await fetchSymbol()

    expect(result).toEqual(expect.any(Array))
    const fields = [
      'id',
      'tradeType',
      'currencyPair',
      'startAt',
      'endAt',
      'baseCurrency',
      'quoteCurrency',
      'basePrecision',
      'quotePrecision',
      'makerTradeFeePercent',
      'takerTradeFeePercent',
      'tradable',
      'enabled'
    ]
    const {
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
    } = result[0]

    const keys = Object.keys(result[0])
    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

    expect(keys).toHaveLength(fields.length)

    expect(id).toEqual(expect.any(Number))
    expect(tradeType).toMatch(/SPOT/)
    expect(currencyPair).toEqual(expect.any(String))
    expect(startAt).toBeNull()
    expect(endAt).toBeNull()
    expect(baseCurrency).toEqual(expect.any(String))
    expect(quoteCurrency).toEqual(expect.any(String))
    expect(basePrecision).toEqual(expect.any(Number))
    expect(quotePrecision).toEqual(expect.any(Number))
    expect(makerTradeFeePercent).toEqual(expect.any(Number))
    expect(takerTradeFeePercent).toEqual(expect.any(Number))
    expect(tradable).toEqual(expect.any(Boolean))
    expect(enabled).toEqual(expect.any(Boolean))
  })
})
