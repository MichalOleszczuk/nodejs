/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
import "./global";
import { checkRandomKey } from "../utils/check-random-key";
import { getRandomKey } from "../utils/get-random-key";
import { isObject } from "../utils/is-object";

Function.prototype.call2 = function (callerContext: any) {
  const context = isObject(callerContext) ? callerContext : {};
  const fnName = checkRandomKey(getRandomKey(), context);

  // eslint-disable-next-line prefer-rest-params
  const args = Array.from(arguments).slice(1);
  context[fnName] = this;

  const result = context[fnName](...args);
  delete context[fnName];

  return result;
};
