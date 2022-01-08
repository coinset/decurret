import { PAIR_ID_MAP } from "./constants.ts";
import { isNumber } from "../deps.ts";
import type { DecurretPair } from "./types.ts";
export type Reviver = Parameters<typeof JSON.parse>[1];

export const jsonFetch = async <T>(
  url: RequestInfo,
  init?: RequestInit,
  options?: { parseJson: Reviver },
): Promise<T> => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw Error(res.statusText);
  }

  const text = await res.text();

  return JSON.parse(text, options?.parseJson);
};

export function takeSymbolId({
  id,
  pair,
}: {
  id?: number;
  pair?: DecurretPair;
}): string {
  if (isNumber(id)) return String(id);
  if (pair === undefined) return "";

  return String(PAIR_ID_MAP[pair]);
}
