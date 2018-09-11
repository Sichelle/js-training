'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 */
  
const total = (anArray =>  anArray.reduce((sum, amount) => sum + amount));   






// const numbers =[1,2,3,4,5];
// const total = numbers.reduce((sum,amount) => sum + amount);
// return total 	


// const array =[1,2,3,4,5];
// const total = array.reduce((sum, amount) => sum + amount); 

// const euros = [29.76, 41.85, 46.5];

// const sum = euros.reduce((total, amount) => total + amount); 

// sum // 118.11

// var sum = [1, 2, 3, 4, 5].reduce(function(memo, val) {
//   return memo + val;
// });


// var sum = [1, 2, 3].reduce(
//   function(total, num){ return total + num }
//   , 0);



// array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
