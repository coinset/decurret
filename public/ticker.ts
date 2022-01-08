import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver, takeSymbolId } from "./_utils.ts";
import { isNumber, isString } from "../deps.ts";
import type { SymbolIdOrPair } from "./types.ts";

const TICKER = "ticker";

export type TickerOptions = SymbolIdOrPair;

export type TickerResponse = {
  symbolId: number;
  bestAsk: number;
  bestBid: number;
  open: number;
  high: number;
  low: number;
  last: number;
  volume: number;
  timestamp: Date;
};

const reviver: Reviver = (key, value) => {
  if (key === "volume" && isString(value)) {
    return Number(value);
  }

  if (key === "timestamp" && isNumber(value)) {
    return new Date(value);
  }

  return value;
};

export function fetchTicker(
  { symbolId, pair }: TickerOptions,
  init?: RequestInit,
): Promise<TickerResponse> {
  const url = new URL(TICKER, BASE_URL);
  const id = takeSymbolId({ id: symbolId, pair });

  url.searchParams.set("symbolId", id);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
