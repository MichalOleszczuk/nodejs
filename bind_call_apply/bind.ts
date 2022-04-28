/* eslint-disable consistent-this */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
import "./global";
import { logThis } from "./utils/logThis";

Function.prototype.bind2ES5 = function (context: any, ...args: any) {
  const self = this;
  return function (...args2: any) {
    return self.call(context, ...args, ...args2);
  };
};

Function.prototype.bind2 = function (context: any, ...args: any) {
  return (...args2: any) => this.call(context, ...args, ...args2);
};

const class1 = {
  name: "class1Name",
};

const class2 = {
  name: "class2Name",
};

console.log("------------------------BIND------------------------");
console.log(logThis.bind2(class1, 2, 3)(4, 5));
console.log(logThis.bind2ES5(class2, 2, 3)(4, 5));
console.log(logThis.bind2(class1, 2, 3)(4, 5));
console.log(logThis.bind2ES5(class2, 2, 3)(4, 5));
console.log(logThis.bind(class1, 2, 3)(4, 5));
console.log(logThis.bind(class2, 2, 3)(4, 5));
