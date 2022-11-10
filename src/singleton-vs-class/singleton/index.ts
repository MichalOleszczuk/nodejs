/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import * as x1 from "./first";
import * as x2 from "./second";

let x11: any = x1;

console.log(`x1 to ${JSON.stringify(x1)}\nx2 to ${JSON.stringify(x2)}`);
x11 = "Nie null juz";
console.log(`x1 to ${JSON.stringify(x1)}\nx2 to ${JSON.stringify(x2)}`);
