// 1. receivesAFunction(callback)
function receivesAFunction(callback) {
    callback(); // Call the provided callback function
  }
  
  // 2. returnsANamedFunction()
  function returnsANamedFunction() {
    // Return a named function
    function namedFunction() {
      console.log("This is a named function!");
    }
    return namedFunction;
  }
  
  // 3. returnsAnAnonymousFunction()
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function!");
    };
  }
  
 