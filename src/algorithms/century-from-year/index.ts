/* istanbul ignore file */
/* eslint-disable no-console */
import { centuryFromYear } from "./century-from-year";

const year1 = 2000;
const year2 = 1999;
const year3 = 1998;
const year4 = 2001;

console.log("centuryFromYear year1", centuryFromYear(year1) === 20);
console.log("centuryFromYear year2", centuryFromYear(year2) === 20);
console.log("centuryFromYear year3", centuryFromYear(year3) === 20);
console.log("centuryFromYear year4", centuryFromYear(year4) === 21);
