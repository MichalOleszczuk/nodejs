/* eslint-disable prefer-spread */
/* eslint-disable no-console */
/* istanbul ignore file */
import { logThis } from "./utils/logThis";
import "./call";
import "./bind";
import "./apply";
import {
  mockClass1,
  mockClass2,
  add,
  mockCall2Food,
  mockNumbers,
  mockFoodName,
  mockFoodPrice,
  mockFirstTwo,
  mockRest,
} from "../../test/src/bind_call_apply/bindCallApply.mock";

console.log("------------------------APPLY------------------------");
console.log(logThis.apply(mockClass1, mockNumbers));
console.log(logThis.apply(null, mockNumbers));
console.log(logThis.apply2(mockClass2, mockNumbers));
console.log(logThis.apply2(null, mockNumbers));

console.log("------------------------BIND------------------------");
console.log(logThis.bind2(mockClass1, mockFirstTwo)(mockRest));
console.log(logThis.bind2ES5(mockClass2, mockFirstTwo)(mockRest));
console.log(logThis.bind2(mockClass1, mockFirstTwo)(mockRest));
console.log(logThis.bind2ES5(mockClass2, mockFirstTwo)(mockRest));
console.log(logThis.bind(mockClass1, mockFirstTwo)(mockRest));
console.log(logThis.bind(mockClass2, mockFirstTwo)(mockRest));

console.log("------------------------CALL------------------------");
console.log(new mockCall2Food(mockFoodName, mockFoodPrice));
console.log(add.call2(null, ...mockFirstTwo));
console.log(add.call2({}, ...mockFirstTwo));
console.log(add.call({}, ...mockFirstTwo));
console.log(logThis.call2(null, ...mockFirstTwo));
console.log(logThis.call2(mockClass1, ...mockFirstTwo));
console.log(logThis.call2(mockClass2, ...mockFirstTwo));
console.log(logThis.call(mockClass1, ...mockFirstTwo));
