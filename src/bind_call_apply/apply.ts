/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-extend-native */
import "./global";
import { checkRandomKey } from "./utils/checkRandomKey";
import { getRandomKey } from "./utils/getRandomKey";
import { isObject } from "./utils/isObject";

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
