/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
import "./global";

const isObject = (obj: unknown) => {
  const type = typeof obj;
  const guardNull = type === "object" && !!obj;

  return type === "function" || guardNull;
};

const getRandomKey = () => {
  const randomKey = [...Array(10)]
    .map((_) => ((Math.random() * 36) | 0).toString(36))
    .join("");

  return randomKey;
};

const checkRandomKey = (key: string, obj: unknown): string =>
  obj[key] === undefined ? key : checkRandomKey(getRandomKey(), obj);

Function.prototype.call2 = function (someOtherThis: any) {
  const context = isObject(someOtherThis) ? someOtherThis : {};
  const fnName = checkRandomKey(getRandomKey(), context);

  // eslint-disable-next-line prefer-rest-params
  const args = Array.from(arguments).slice(1);
  context[fnName] = this;

  const result = context[fnName](...args);
  delete context[fnName];

  return result;
};

const class1 = {
  name: "1",
};

const class2 = {
  name: "2",
};

function log(...args: Array<unknown>) {
  console.log(this.name, ...args);
  return 0;
}

console.log(log.call2(null, 2, 3));
console.log(log.call2(class2, 2, 3));
console.log(log.call(class1, 2, 3));
