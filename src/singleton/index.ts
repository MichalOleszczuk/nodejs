/* eslint-disable no-console */
import { one } from "./1";
import { two } from "./2";

const singleA = one.getInstance();
const singleB = two.getInstance();

console.log(
  "First import of instance",
  singleA.getRandomNumber() === singleB.getRandomNumber()
);

setTimeout(() => {
  const singleB1 = two.getInstance();
  console.log(
    "Delay re import",
    singleA.getRandomNumber() === singleB1.getRandomNumber()
  );
}, 3000);
