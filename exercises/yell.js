'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

 const yell = (str) => {

 	return str.toUpperCase()
 }


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')



assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('a b c'), 'A B C')
assert.deepStrictEqual(yell('h o l a'), 'H O L A')
assert.deepStrictEqual(yell('a 1 c d e f'),  'A 1 C D E F')

// End of tests */











// End of tests */
