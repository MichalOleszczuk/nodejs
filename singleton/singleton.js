/* Singleton */

const mySingleton = (function () {
    // Instance stores a reference to the Singleton
    let instance;
    function init() {
      // Singleton
      // Private methods and constiables
      function privateMethod(){
          console.log( "I am private" );
      }
      const privateconstiable = "Im also private";
      const privateRandomNumber = Math.random();
      return {
        // Public methods and constiables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
        publicProperty: "I am also public",
        getRandomNumber: function() {
          return privateRandomNumber;
        }
      };
    };
    return {
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }
    };
  })();
  
  const singleA = mySingleton.getInstance();
  const singleB = mySingleton.getInstance();
  singleA.publicMethod();
  console.log(singleA.publicProperty);
  console.log(singleA.getRandomNumber() === singleB.getRandomNumber() );

  exports.singleton = mySingleton;
   