import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver, takeSymbolId } from "./_utils.ts";
import { isNumber, isUndefined } from "../deps.ts";
import type { SymbolIdOrPair } from "./types.ts";

const CANDLESTICK = "candlestick";

export type CandlestickOptions = SymbolIdOrPair & {
  candlestickType: "PT1M" | "PT1H" | "P1D" | "P1W" | "P1M";
  dateFrom?: number;
  dateTo?: number;
};

export type CandlestickResponse = {
  symbolId: number;
  candlesticks: {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    time: Date;
  }[];
  timestamp: Date;
};

const reviver: Reviver = (key, value) => {
  if (["timestamp", "time"].includes(key) && isNumber(value)) {
    return new Date(value);
  }

  return value;
};

export function fetchCandlestick(
  { symbolId, pair, candlestickType, dateFrom, dateTo }: CandlestickOptions,
  init?: RequestInit,
): Promise<CandlestickResponse> {
  const url = new URL(CANDLESTICK, BASE_URL);

  const id = takeSymbolId({ id: symbolId, pair });

  url.search = new URLSearchParams({
    symbolId: id,
    candlestickType,
    dateFrom: isUndefined(dateFrom) ? "" : String(dateFrom),
    dateTo: isUndefined(dateTo) ? "" : String(dateTo),
  }).toString();

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
