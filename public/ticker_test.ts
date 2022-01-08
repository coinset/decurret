import { any, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchTicker } from "./ticker.ts";
test("fetchTicker", async () => {
  await expect(fetchTicker({ pair: "BTC_JPY" })).resolves.toEqual({
    symbolId: anyNumber(),
    bestAsk: anyNumber(),
    bestBid: anyNumber(),
    open: anyNumber(),
    high: anyNumber(),
    low: anyNumber(),
    last: anyNumber(),
    volume: anyNumber(),
    timestamp: any(Date),
  });
});
