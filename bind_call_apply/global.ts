/* eslint-disable @typescript-eslint/ban-types */
export {};

declare global {
  interface Function {
    call2(this: Function, thisArg: any, ...argArray: any[]): any;
  }
}
