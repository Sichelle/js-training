'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = str => {
	return str.substr(0,2)
}

const keepLast = str => {
	return str.substr(-2)
}
const keepFirstLast = str => {
	return str.substr(3,2)
}

 console.log(keepLast("hihellohi"))


//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.deepStrictEqual(keepFirst('ABCDEFGHIJ'), 'AB')

assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.deepStrictEqual(keepLast('ABCDEFGHIJ'), 'IJ')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirstLast('ABCDEFGHIJ'), 'DE')








// End of tests */
