/* eslint-disable no-console */

export function logThis(...args: Array<unknown>) {
  console.log(this?.name, ...args);
  return args;
}
