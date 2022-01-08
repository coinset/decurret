import { any, anyArray, anyNumber, anyOf, expect, test } from "../dev_deps.ts";
import { fetchTrades } from "./trades.ts";
test("fetchTrades", async () => {
  await expect(fetchTrades({ pair: "BTC_JPY" })).resolves.toEqual({
    symbolId: anyNumber(),
    trades: anyArray({
      id: anyNumber(),
      orderSide: anyOf(["BUY", "SELL"]),
      price: anyNumber(),
      amount: anyNumber(),
      tradedAt: any(Date),
    }),
    timestamp: any(Date),
  });
});
