import type { BTC, ETH, XRP, ONT, QTUM, Pair, JPY } from 'cryptocurrency-types'
import type { Exclusive } from 'utilitypes'

type DeccretSymbol = BTC | ETH | XRP | ONT | QTUM

type DecurretPair = Pair<DeccretSymbol, JPY> | Pair<ETH, BTC>

type SymbolIdOrPair = Exclusive<
  {
    symbolId: number
  },
  {
    pair: DecurretPair
  }
>
export type { DecurretPair, SymbolIdOrPair, DeccretSymbol }
