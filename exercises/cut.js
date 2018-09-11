'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = str => {
	return str.slice(2)
}

const cutLast = str => {
	return str.slice(0, -2)
}
const cutFirstLast = str =>{
	return str.slice(2 , -2)
}


//* Begin of tests
const assert = require('assert')
// assert.fail('You must write your own tests')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.deepStrictEqual(cutFirst('ABCDEFGHIJ'), 'CDEFGHIJ')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.deepStrictEqual(cutLast('ABCDEFGHIJ'), 'ABCDEFGH')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('ABCDEFGHIJ'), 'CDEFGH')






// assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
// assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
// assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])





// End of tests */
