import {
  anyArray,
  anyBoolean,
  anyNumber,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import { fetchSymbol } from "./symbol.ts";
test("fetchSymbol", async () => {
  await expect(fetchSymbol()).resolves.toEqual(anyArray({
    id: anyNumber(),
    tradeType: "SPOT",
    currencyPair: anyString(),
    startAt: null,
    endAt: null,
    baseCurrency: anyString(),
    quoteCurrency: anyString(),
    basePrecision: anyNumber(),
    quotePrecision: anyNumber(),
    makerTradeFeePercent: anyNumber(),
    takerTradeFeePercent: anyNumber(),
    tradable: anyBoolean(),
    enabled: anyBoolean(),
  }));
});
