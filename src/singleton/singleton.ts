/* eslint-disable no-console */
/* Singleton */

interface ISingleton {
  publicMethod: () => void;
  publicProperty: string;
  getRandomNumber: () => number;
}

const mySingleton = (function () {
  // Instance stores a reference to the Singleton
  let instance: ISingleton;

  function init(): ISingleton {
    // Singleton
    // Private methods and constiables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function privateMethod() {
      console.log("I am private");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const privateconstiable = "Im also private";
    const privateRandomNumber = Math.random();
    return {
      // Public methods and constiables
      publicMethod() {
        console.log("The public can see me!");
      },
      publicProperty: "I am also public",
      getRandomNumber() {
        return privateRandomNumber;
      },
    };
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());

export const singleton = mySingleton;
