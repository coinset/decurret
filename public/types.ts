import type {
  BTC,
  ETH,
  Exclusive,
  JPY,
  ONT,
  Pair,
  QTUM,
  XRP,
} from "../deps.ts";

export type DeccretSymbol = BTC | ETH | XRP | ONT | QTUM;
export type DecurretPair = Pair<DeccretSymbol, JPY> | Pair<ETH, BTC>;

export type SymbolIdOrPair = Exclusive<
  {
    symbolId: number;
  },
  {
    pair: DecurretPair;
  }
>;
