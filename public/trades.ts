import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver, takeSymbolId } from "./_utils.ts";
import { isNumber } from "../deps.ts";
import type { SymbolIdOrPair } from "./types.ts";

const TRADES = "trades";

export type TradesOptions = SymbolIdOrPair;

export type TradesResponse = {
  symbolId: number;
  trades: {
    id: number;
    orderSide: "BUY" | "SELL";
    price: number;
    amount: number;
    tradedAt: Date;
  }[];
  timestamp: Date;
};

const reviver: Reviver = (key, value) => {
  if (["timestamp", "tradedAt"].includes(key) && isNumber(value)) {
    return new Date(value);
  }

  return value;
};

function fetchTrades(
  { symbolId, pair }: TradesOptions,
  init?: RequestInit,
): Promise<TradesResponse> {
  const url = new URL(TRADES, BASE_URL);
  const id = takeSymbolId({ id: symbolId, pair });

  url.searchParams.set("symbolId", id);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}

export { fetchTrades };
