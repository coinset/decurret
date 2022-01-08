import type { DecurretPair } from "./types.ts";
export const BASE_URL = "https://api-trade.decurret.com/api/v1/";

const BTC_JPY = "BTC_JPY" as const;
const ETH_BTC = "ETH_BTC" as const;
const ETH_JPY = "ETH_JPY" as const;
const XRP_JPY = "XRP_JPY" as const;
const ONT_JPY = "ONT_JPY" as const;
const QTUM_JPY = "QTUM_JPY" as const;

export const ALL_DECURRET_PAIRS: DecurretPair[] = Array.from(
  new Set([
    BTC_JPY,
    ETH_BTC,
    ETH_JPY,
    ONT_JPY,
    QTUM_JPY,
    XRP_JPY,
  ]),
);

export const PAIR_ID_MAP = {
  BTC_JPY: 1 as const,
  ETH_BTC: 2 as const,
  ETH_JPY: 3 as const,
  XRP_JPY: 8 as const,
  ONT_JPY: 9 as const,
  QTUM_JPY: 10 as const,
};
