/* eslint-disable @typescript-eslint/ban-types */
export {};

declare global {
  interface Function {
    call2(this: Function, thisArg: any, ...argArray: any[]): any;
    bind2(this: Function, thisArg: any, ...argArray: any[]): any;
    bind2ES5(this: Function, thisArg: any, ...argArray: any[]): any;
    apply2(this: Function, thisArg: any, argArray?: any): any;
  }
}
