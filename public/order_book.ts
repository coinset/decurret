import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver, takeSymbolId } from "./_utils.ts";
import { SymbolIdOrPair } from "./types.ts";
import { isNumber } from "../deps.ts";

const ORDER_BOOK = "orderbook";

export type OrderBookOptions = SymbolIdOrPair;

export type OrderBookResponse = {
  symbolId: number;
  asks: {
    price: number;
    amount: number;
  }[];
  bids: {
    price: number;
    amount: number;
  }[];
  timestamp: Date;
  bestBid: number;
  bestAsk: number;
  midPrice: number;
  spread: number;
};

const reviver: Reviver = (key, value) => {
  if (key === "timestamp" && isNumber(value)) {
    return new Date(value);
  }

  return value;
};

export function fetchOrderBook(
  { symbolId, pair }: OrderBookOptions,
  init?: RequestInit,
): Promise<OrderBookResponse> {
  const url = new URL(ORDER_BOOK, BASE_URL);

  const id = takeSymbolId({ id: symbolId, pair });

  url.searchParams.set("symbolId", id);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
