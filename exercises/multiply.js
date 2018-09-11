'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :7 
// a = 10 y b = -1
// si-if ? alors : else
const abs = (argument) => argument>0?argument:-argument;

const multiply = (a , b) => {
	const valueToAdd = b > 0 ? a : -a;
	let result = 0;
	let numberOfOperation = abs(b); 
	
	while (numberOfOperation > 0) { 
		result = result + valueToAdd ; 
		numberOfOperation = numberOfOperation - 1; 
	}

	return result;
}




//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
