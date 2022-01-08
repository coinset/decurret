import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";

const SYMBOL = "symbol";

export type SymbolResponse = {
  id: number;
  tradeType: "SPOT";
  currencyPair: string;
  startAt: null;
  endAt: null;
  baseCurrency: string;
  quoteCurrency: string;
  basePrecision: number;
  quotePrecision: number;
  makerTradeFeePercent: number;
  takerTradeFeePercent: number;
  tradable: boolean;
  enabled: boolean;
}[];

export function fetchSymbol(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<SymbolResponse> {
  const url = new URL(SYMBOL, BASE_URL);

  return jsonFetch(url.toString(), init);
}
