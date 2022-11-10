/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-extend-native */
import "./global";
import { checkRandomKey } from "../utils/check-random-key";
import { isObject } from "../utils/is-object";
import { getRandomKey } from "../utils/get-random-key";

Function.prototype.apply2 = function (
  callerContext: Function,
  args: Array<unknown>
) {
  const context = isObject(callerContext) ? callerContext : {};
  const fnName = checkRandomKey(getRandomKey(), context);
  const args2 = args.length ? args : [];

  context[fnName] = this;
  const result = context[fnName](...args2);
  delete context[fnName];

  return result;
};
