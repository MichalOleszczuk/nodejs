/* eslint-disable consistent-this */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
import "./global";

Function.prototype.bind2ES5 = function (callerContext: any, ...args: any) {
  const self = this;
  return function (...args2: any) {
    return self.call(callerContext, ...args, ...args2);
  };
};

Function.prototype.bind2 = function (callerContext: any, ...args: any) {
  return (...args2: any) => this.call(callerContext, ...args, ...args2);
};
