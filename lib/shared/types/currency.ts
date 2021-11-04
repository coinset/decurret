import type { StrictExtract } from '@/utils/types'
import type { All_Pairs } from 'cryptocurrency-types'
import type { Exclusive } from 'utilitypes'

type DecurretPair = StrictExtract<
  All_Pairs,
  'BTC_JPY' | 'ETH_BTC' | 'ETH_JPY' | 'XRP_JPY' | 'ONT_JPY' | 'QTUM_JPY'
>

type SymbolIdOrPair = Exclusive<
  {
    symbolId: number
  },
  {
    pair: DecurretPair
  }
>
export type { DecurretPair, SymbolIdOrPair }
