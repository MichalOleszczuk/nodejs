/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
import "./global";
import { checkRandomKey } from "./utils/checkRandomKey";
import { getRandomKey } from "./utils/getRandomKey";
import { isObject } from "./utils/isObject";
import { logThis } from "./utils/logThis";

Function.prototype.call2 = function (_context: any) {
  const context = isObject(_context) ? _context : {};
  const fnName = checkRandomKey(getRandomKey(), context);

  // eslint-disable-next-line prefer-rest-params
  const args = Array.from(arguments).slice(1);
  context[fnName] = this;

  const result = context[fnName](...args);
  delete context[fnName];

  return result;
};

const class1 = {
  name: "class1Name",
};

const class2 = {
  name: "class2Name",
};

function Product(name: string, price: number) {
  this.name = name;
  this.price = price;
}

function Food(name: string, price: number) {
  Product.call2(this, name, price);
  this.category = "food";
}

const add = (a: number, b: number) => a + b;

console.log("------------------------CALL------------------------");
console.log(new Food("cheese", 5));
console.log(add.call2(null, 5, 6, 7));
console.log(logThis.call2(null, 2, 3));
console.log(logThis.call2(class1, 2, 3));
console.log(logThis.call2(class2, 2, 3));
console.log(logThis.call(class1, 2, 3));
