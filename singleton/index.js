const { one } = require("./1");
const { two } = require("./2");

const singleA = one.getInstance();
const singleB = two.getInstance();

console.log(
  "First import of instance",
  singleA.getRandomNumber() === singleB.getRandomNumber()
);

setTimeout(() => {
  const singleB = two.getInstance();
  console.log(
    "Delay re import",
    singleA.getRandomNumber() === singleB.getRandomNumber()
  );
}, 3000);
