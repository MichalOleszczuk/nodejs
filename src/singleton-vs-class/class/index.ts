/* eslint-disable no-console */
import * as x1 from "./first";
import * as x2 from "./second";

console.log(`x1 to ${JSON.stringify(x1)}\nx2 to ${JSON.stringify(x2)}`);
(x1 as any).test = "nie jestem z konstruktora";
console.log(`x1 to ${JSON.stringify(x1)}\nx2 to ${JSON.stringify(x2)}`);
