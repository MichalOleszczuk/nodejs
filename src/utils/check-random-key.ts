import { getRandomKey } from "./get-random-key";

export const checkRandomKey = (key: string, obj: unknown): string =>
  obj[key] === undefined ? key : checkRandomKey(getRandomKey(), obj);
