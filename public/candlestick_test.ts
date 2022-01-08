import { any, anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import { fetchCandlestick } from "./candlestick.ts";

test("fetchCandlestick", async () => {
  await expect(
    fetchCandlestick({ "pair": "BTC_JPY", "candlestickType": "P1D" }),
  ).resolves.toEqual({
    symbolId: anyNumber(),
    candlesticks: anyArray({
      open: anyNumber(),
      high: anyNumber(),
      low: anyNumber(),
      close: anyNumber(),
      volume: anyNumber(),
      time: any(Date),
    }),
    timestamp: any(Date),
  });
});
