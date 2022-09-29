/* istanbul ignore file */
/* eslint-disable no-console */
import { Stack } from "./stack";

const element1 = { name: "element1" };
const element2 = { name: "element2" };
const element3 = { name: "element3" };

const stack = new Stack();

stack.push(element1);
console.log(`Stack length with first element: ${stack.length()}`);

stack.push(element2);
console.log(`Stack length with second element: ${stack.length()}`);

stack.push(element3);
console.log(`Stack length with third element: ${stack.length()}`);

console.log(`Latest element on the stack: ${JSON.stringify(stack.peek())}`);

console.log(
  `Length before pop: ${stack.length()}
  Pop Latest element on the stack: ${JSON.stringify(stack.pop())}
  length after pop: ${stack.length()}`
);
