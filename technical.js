// Don’t Lie in your Interview
// Use Examples
function interviewExample() {
    // Honest representation of skills and experience
    console.log("Be truthful in your interview and provide examples.");
  
    // Double Equal versus Triple Equal (‘== vs ===’)
    console.log(5 == '5');  // true (coerced equality)
    console.log(5 === '5'); // false (strict equality)
  
    // Closure in JavaScript
    function outer() {
      let outerVar = 'I am outer!';
      
      function inner() {
        console.log(outerVar);
      }
      
      return inner;
    }
  
    const closureFunction = outer();
    closureFunction(); // Outputs: 'I am outer!'
  
    // Lexical versus Block Scope
    {
      // Block scope
      let blockVar = 'I am in a block!';
      console.log(blockVar);
    }
  
    // typeof in JavaScript
    console.log(typeof 42);      // 'number'
    console.log(typeof 'hello'); // 'string'
  
    // 'use strict' in JavaScript
    'use strict';
    // Helps catch common coding errors
  
    // Delete in JavaScript
    let obj = { key: 'value' };
    delete obj.key; // Deletes the 'key' property
  
    let arr = [1, 2, 3];
    delete arr[1];  // Removes the element at index 1
  
    // 'this' in JavaScript
    const objWithContext = {
      name: 'John',
      greet: function() {
        console.log('Hello, ' + this.name + '!');
      }
    };
  
    objWithContext.greet(); // Outputs: 'Hello, John!'
  }
  
  // Execute the example
  interviewExample();
  