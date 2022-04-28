/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable consistent-this */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
import "./global";
import { checkRandomKey } from "./utils/checkRandomKey";
import { getRandomKey } from "./utils/getRandomKey";
import { isObject } from "./utils/isObject";
import { logThis } from "./utils/logThis";

Function.prototype.apply2 = function (
  _context: Function,
  ...args: Array<unknown>
) {
  const context = isObject(_context) ? _context : {};
  const fnName = checkRandomKey(getRandomKey(), context);
  const args2 = args.length ? args : [];

  context[fnName] = this;
  const result = context[fnName](...args2);
  delete context[fnName];

  return result;
};

const numbers = [5, 6, 2, 3, 7];

const class1 = {
  name: "class1Name",
};

console.log("------------------------APPLY------------------------");
console.log(logThis.apply(class1, numbers));
console.log(logThis.apply(null, numbers));
console.log(logThis.apply2(class1, numbers));
console.log(logThis.apply2(null, numbers));
