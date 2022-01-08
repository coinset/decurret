import { any, anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchOrderBook } from "./order_book.ts";
test("fetchOrderBook", async () => {
  await expect(fetchOrderBook({ pair: "BTC_JPY" })).resolves.toEqual({
    symbolId: anyNumber(),
    asks: anyArray({
      price: anyNumber(),
      amount: anyNumber(),
    }),
    bids: anyArray({
      price: anyNumber(),
      amount: anyNumber(),
    }),
    timestamp: any(Date),
    bestBid: anyNumber(),
    bestAsk: anyNumber(),
    midPrice: anyNumber(),
    spread: anyNumber(),
  });
});
